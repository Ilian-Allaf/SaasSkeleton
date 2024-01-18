// components/ProfileForm.js
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSession} from 'next-auth/react'
import MultiSelector from "@/components/MultiSelector"
import { PencilAltIcon } from '@heroicons/react/outline';
import Modal from '@/components/Modal';
import InputField from '@/components/InputField';
import { UpdateUsername } from '@/actions/updateUserAcitons/updateUsername';
import { SubmitEmailUpdateRequest } from '@/actions/updateUserAcitons/submitEmailUpdateRequest';
import { ValidateEmail } from '@/actions/updateUserAcitons/validateEmail';
import InputError from '@/components/InputError';
import { MailIcon } from '@heroicons/react/solid'

function General() {
  return (
    <div className='space-y-20'>
      <div><ProfileFields /></div>
      <div><OthersFields /></div>
    </div>
  );
}


function ProfileFields() {
  const { data: session, update  } = useSession();
  const [error, setError] = useState({ message: '', field: '' });
  const [isUsernameModalOpen, setIsUsernameModalOpen] = useState(false)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [updateTab, setUpdateTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [modalTitle, setModalTitle] = useState("")
  const [modalSubTitle, setModalSubTitle] = useState("")

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [profileItems, setProfileItems] = useState([
    { label: 'Username', value: session?.user.username, updateSetting: () => { setModalTitle("Update Username"); setModalSubTitle(""); setIsUsernameModalOpen(true); } },
    { label: 'Email', value: session?.user.email, updateSetting: () => { setModalTitle("Update Email"); setModalSubTitle(""); setIsEmailModalOpen(true); } },
  ]);


  //#region Hooks
  useEffect(() => {
    if (!isEmailModalOpen) {
      setEmail('');
      setPassword('');
      setUpdateTab(0);
    }
  }, [isEmailModalOpen]);

  useEffect(() => {
    if (!isUsernameModalOpen) {
      setUsername('');
      
    }
  }, [isUsernameModalOpen]);


  //#endregion

  //#region Username functions

    const handleUsernameSubmission = async () => {
      try {
        const result = await UpdateUsername(username);
        if (result?.error) {
          setError({message: result.error, field: 'username'});
          console.error(result.error);
          return;
        }

        setIsUsernameModalOpen(false);
        update({ username: username })
        setUsername('')
      }
      catch (e) {
        console.log(e);
      }
    }

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newUsername = event.target.value.slice(0, 50);
      const isValidUsername = /^[a-zA-Z0-9]*$/.test(newUsername);
      if (isValidUsername) {
        setUsername(newUsername);
      }
      if (error.field === 'username') {
        setError({ message: '', field: '' });
      }
    };
  //#endregion

  //#region Update Email functions

//add possibility to go back to tab0 and tab1

const handleEmailSubmission = async () => {
  const isValidEmail = await ValidateEmail(email);
  
  if (isValidEmail?.error) {
    console.log(isValidEmail)
    setError({message: isValidEmail.error, field: 'email'});
    return;
  }
  setModalSubTitle("Enter your password to comfirm your identity");
  setUpdateTab(1);
}

const handlePasswordSubmission = async () => {

    const res = await SubmitEmailUpdateRequest(email, password);
    if (res?.error) {
      if (res.field == "password") { setError({message: res.error, field: 'password'}); }
      return;
    }
    setModalTitle(""); 
    setModalSubTitle(""); 
    setUpdateTab(2);
}


const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const newEmail = event.target.value.slice(0, 100);
  const isValidEmail = /^[^+]*$/.test(newEmail);
  if (isValidEmail) {
    setEmail(newEmail);
    if (error.field === 'email') {
      setError({ message: '', field: '' });
    }
  }
};

const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newPassword = e.target.value;
  setPassword(newPassword);
  setError({ message: '', field: '' });
};

const handleTogglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};
//#endregion

  return (
    <>
      {/* Username Modal*/}
      <Modal isOpen={isUsernameModalOpen} setIsOpen={setIsUsernameModalOpen} title='Update Username'>
        <div className="mt-6">
          <InputField value={username} height={0} label='Username' onChange={(event) => handleUsernameChange(event) }/>
          {error.message && error.field === 'username' && (
            <InputError error={error.message}/>
          )}
          <div className="flex justify-center space-x-4 mt-6">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() =>  handleUsernameSubmission()}
            >
              Apply
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => {setIsUsernameModalOpen(false); setUsername('')}}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      {/* Email Modal*/}
      <Modal isOpen={isEmailModalOpen} setIsOpen={setIsEmailModalOpen} title={modalTitle} subtitle={modalSubTitle}>
        {updateTab === 0 && 
          <div className="mt-6">
            
            <InputField value={email} height={0} label='Email' error={error.field === 'email'} onChange={(event) => handleEmailChange(event) }/>
            {error.message && error.field === 'email' && (
              <InputError error={error.message}/>
            )}
          
            <div className="flex justify-center space-x-4 mt-6">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => setIsEmailModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => handleEmailSubmission()}
              >
                Next
              </button>

            </div>
          </div>
        } 

        {updateTab === 1 && 
          <div className="mt-6">
              <InputField value={password} height={0} isPassword={true} error={error.field === "password"} disableText={true} onTogglePasswordVisibility={handleTogglePasswordVisibility} passwordVisible={showPassword} label='Password' onChange={(event) => handlePasswordChange(event) }/>
              {error.message && error.field === 'password' && (
                <InputError error={error.message}/>
              )}
            
            <div className="flex justify-center space-x-4 mt-6">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => setIsEmailModalOpen(false) }
            >
              Cancel
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => handlePasswordSubmission()}
            >
              Comfirm 
            </button>
            </div>
          </div>
        }
        
        {updateTab === 2 && 
          <div className="mt-6">
            <div className="flex flex-col items-center justify-center">
              <MailIcon className="h-10 w-10"/>
              <p className="text-center">Please check this email address to apply changes</p>
              <p className="text-center">{email}</p>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => setIsEmailModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        }

      </Modal>

      <h1 className="text-m font-medium">Profile</h1>
      <p className="text-sm text-gray-600 mb-4">This information will be displayed publicly so be careful what you share.</p>
      <div className="border-t border-gray-300" />
      <div className="grid grid-rows gap-6 mt-6">
        {profileItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-gray-700 text-sm font-medium">{item.label?.toString()}</span>
            <div className="col-span-1 text-gray-700 text-left text-sm">{item.value?.toString()}</div>
            <span className="col-span-1 flex justify-end cursor-pointer" onClick={() => item.updateSetting()}>
              <PencilAltIcon className="h-5 w-5 hover:text-indigo-700" />
            </span>
            {index !== profileItems.length - 1 && (
              <div className="col-start-1 col-end-4 border-t border-gray-200 mt-5" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function OthersFields() {
  const defaultLanguage = "English"  //get from session or cookie
  const defaultCurrency = "Dollar" //get from session or cookie

  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false)
  const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false)
  const [language, setLanguage] = useState(defaultLanguage);
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  
  const [currency, setCurrency] = useState(defaultCurrency);
  const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);


  const currencyOptions = [
    { value: 'Dollar', label: 'USD' },
    { value: 'Euro', label: 'EUR' },
  ]

  const languageOptions = [
    { value: 'Français', label: 'FR' },
    { value: 'English', label: 'EN' },
    { value: 'Español', label: 'ES'},

  ]
  
  const [OthersItems, setOthersItems] = useState([
    { label: 'Language', value: language, updateSetting: () => {setIsLanguageModalOpen(true)} },
    { label: 'Currency', value: currency, updateSetting: () => {setIsCurrencyModalOpen(true)} },
  ]);


  //#region Hooks
useEffect(() => {
  if (!isLanguageModalOpen) {
    setSelectedLanguage(language);
  }
}, [isLanguageModalOpen]);

useEffect(() => {
  if (!isCurrencyModalOpen) {
    setSelectedCurrency(currency);
  }
}, [isCurrencyModalOpen]);

useEffect(() => {
  setOthersItems([
    { label: 'Language', value: language, updateSetting: () => {setIsLanguageModalOpen(true)} },
    { label: 'Currency', value: currency, updateSetting: () => {setIsCurrencyModalOpen(true)} },
  ]);
}, [language, currency]);

//#endregion

  //#region functions
  const handleLanguageSubmission = async () => {
    //update language in cookie or session
    setLanguage(selectedLanguage); 
    setIsLanguageModalOpen(false);
  }

  const handleCurrencySubmission = async () => {
    //update currency in cookie or session
    setCurrency(selectedCurrency); 
    setIsCurrencyModalOpen(false);
  }
  //#endregion

  return (
    <>
    {/* Language Modal*/}
    <Modal isOpen={isLanguageModalOpen} setIsOpen={setIsLanguageModalOpen} title='Update Language'>
        <div className="mt-6">
          <div className="flex justify-center items-center">
            <MultiSelector 
            options={languageOptions} 
            onChange={(event: ChangeEvent<HTMLSelectElement>) => setSelectedLanguage(event.target.value)}
            defaultValue={selectedLanguage}/>
          </div>          
          <div className="flex justify-center space-x-4 mt-6">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => { handleLanguageSubmission() }}
            >
              Apply
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => { setIsLanguageModalOpen(false); }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      {/* Currency Modal*/}
      <Modal isOpen={isCurrencyModalOpen} setIsOpen={setIsCurrencyModalOpen} title='Update Currency'>
          <div className="mt-6">
            <div className="flex justify-center items-center">
              <MultiSelector 
              options={currencyOptions} 
              onChange={(event: ChangeEvent<HTMLSelectElement>) => setSelectedCurrency(event.target.value)}
              defaultValue={selectedCurrency}/>
            </div>          
            <div className="flex justify-center space-x-4 mt-6">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => { handleCurrencySubmission() }}
              >
                Apply
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => { setIsCurrencyModalOpen(false); }}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      <h1 className="text-m font-medium mb-4">Others</h1>
      <div className="border-t border-gray-300" />
      <div className="grid grid-rows gap-6 mt-6">
        {OthersItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-gray-700 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-gray-700 text-left text-sm">{item.value}</div>

            <span className="col-span-1 flex justify-end cursor-pointer" onClick={() => item.updateSetting()}>
              <PencilAltIcon className="h-5 w-5 hover:text-indigo-700" />
            </span>
            {index !== OthersItems.length - 1 && (
              <div className="col-start-1 col-end-4 border-t border-gray-200 mt-5" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default General;
