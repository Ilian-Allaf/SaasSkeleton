// components/ProfileForm.js
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSession} from 'next-auth/react'
import MultiSelector from "@/components/MultiSelector"
import { PencilIcon } from '@heroicons/react/outline';
import Modal from '@/components/Modal';
import InputField from '@/components/InputField';
import { UpdateUsername } from '@/actions/userActions/updateUsername';
import { SubmitEmailUpdateRequest } from '@/actions/userActions/submitEmailUpdateRequest';
import { ValidateEmail } from '@/actions/userActions/validateEmail';
import InputError from '@/components/InputError';
import { MailIcon } from '@heroicons/react/solid'
import { languageDict, languageOptions } from '@/i18n/settings';
import { useTranslation } from '@/i18n/client'
import { getCookie } from 'cookies-next';
import Button from '@/components/Button';
import { SwitchLanguageProps } from './skeleton'



function General({ switchLanguage, setSwitchLanguage }: SwitchLanguageProps) {
  return (
    <div className='space-y-20'>
      <div><ProfileFields switchLanguage={switchLanguage} setSwitchLanguage={setSwitchLanguage}/></div>
      <div><OthersFields setSwitchLanguage={setSwitchLanguage} /></div>
    </div>
  );
}


function ProfileFields({ switchLanguage, setSwitchLanguage }: SwitchLanguageProps){
  const { t } = useTranslation('settings')
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


  const items = [
    { label: t("general.username"), value: session?.user.username, updateSetting: () => { setModalTitle(t("general.update-username")); setModalSubTitle(""); setIsUsernameModalOpen(true); } },
    { label: t("general.email"), value: session?.user.email, updateSetting: () => { setModalTitle(t("general.update-email")); setModalSubTitle(""); setIsEmailModalOpen(true); } },
  ]

  const [profileItems, setProfileItems] = useState(items);

  useEffect(() => {
    setProfileItems(items);
    setSwitchLanguage(false)
  }, [switchLanguage]);

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

const handleEmailSubmission = async () => {
  const isValidEmail = await ValidateEmail(email);
  
  if (isValidEmail?.error) {
    console.error(isValidEmail.error)
    setError({message: isValidEmail.error, field: 'email'});
    return;
  }
  setModalSubTitle(t("general.enter-password"));
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
      <Modal isOpen={isUsernameModalOpen} setIsOpen={setIsUsernameModalOpen} title={t("general.update-username")}>
        <div className="mt-6">
          <InputField value={username} error={error.field === "username"}  height={1} label={t("general.username")} onChange={(event) => handleUsernameChange(event) }/>
          {error.message && error.field === 'username' && (
            <InputError error={error.message}/>
          )}
          <div className="flex justify-center space-x-4 mt-6">
            <Button label={t("general.update")} onClick={() => handleUsernameSubmission()}/>
            <Button label={t("general.cancel")} onClick={() => {setIsUsernameModalOpen(false); setUsername('')}}/>
          </div>
        </div>
      </Modal>

      {/* Email Modal*/}
      <Modal isOpen={isEmailModalOpen} setIsOpen={setIsEmailModalOpen} title={modalTitle} subtitle={modalSubTitle}>
        {updateTab === 0 && 
          <div className="mt-6">
            
            <InputField value={email} height={1} label={t("general.email")} error={error.field === 'email'} onChange={(event) => handleEmailChange(event) }/>
            {error.message && error.field === 'email' && (
              <InputError error={error.message}/>
            )}
          
            <div className="flex justify-center space-x-4 mt-6">
              <Button label={t("general.confirm")} onClick={() => handleEmailSubmission()}/>
              <Button label={t("general.cancel")} onClick={() => setIsEmailModalOpen(false)}/>
            </div>
          </div>
        } 

        {updateTab === 1 && 
          <div className="mt-6">
              <InputField value={password} height={1} isPassword={true} error={error.field === "password"} disableText={true} onTogglePasswordVisibility={handleTogglePasswordVisibility} passwordVisible={showPassword} label={t("general.password")} onChange={(event) => handlePasswordChange(event) }/>
              {error.message && error.field === 'password' && (
                <InputError error={error.message}/>
              )}
            
            <div className="flex justify-center space-x-4 mt-6">
              <Button label={t("general.confirm")} onClick={() => handlePasswordSubmission()}/>
              <Button label={t("general.cancel")} onClick={() => setIsEmailModalOpen(false)}/>
            </div>
          </div>
        }
        
        {updateTab === 2 && 
          <div className="mt-6">
            <div className="flex flex-col items-center justify-center">
              <MailIcon className="h-10 w-10"/>
              <p className="text-center">{t("general.check-email")}</p>
              <p className="text-center font-bold mt-3">{email}</p>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <Button label='Close' onClick={() => setIsEmailModalOpen(false)}/>
            </div>
          </div>
        }

      </Modal>
 
      <h1 className="text-m font-medium">{t("general.profile-title")}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{t("general.profile-subtitle")}</p>
      <div className="border-t border-gray-300" />
      <div className="grid grid-rows gap-6 mt-6">
        {profileItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-sm font-medium">{item.label?.toString()}</span>
            <div className="col-span-1 text-left text-sm">{item.value?.toString()}</div>
            <span className="col-span-1 flex justify-end cursor-pointer" onClick={() => item.updateSetting()}>
              <PencilIcon className="h-5 w-5 hover:text-indigo-700" />
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

function OthersFields({ setSwitchLanguage }: { setSwitchLanguage: (value: boolean) => void }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation('settings');
  const i18nCookie = getCookie(process.env.NEXT_PUBLIC_I18N_COOKIE_NAME as string) as  string
  const defaultLanguage = languageDict[i18nCookie]
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
  ];

  const [OthersItems, setOthersItems] = useState([
    { label: t("general.language"), value: language, updateSetting: () => {setIsLanguageModalOpen(true)} },
    { label: t("general.currency"), value: currency, updateSetting: () => {setIsCurrencyModalOpen(true)} },
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
    { label: t("general.language"), value: language, updateSetting: () => {setIsLanguageModalOpen(true)} },
    { label: t("general.currency"), value: currency, updateSetting: () => {setIsCurrencyModalOpen(true)} },
  ]);
  setSwitchLanguage(true)
}, [language, currency]);

//#endregion

  //#region functions
  const handleLanguageSubmission = () => {
    //update language in cookie or session
    setLanguage(selectedLanguage); 
    const label = Object.keys(languageDict).find(key => languageDict[key] === selectedLanguage)
    i18n.changeLanguage(label)
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
    <Modal isOpen={isLanguageModalOpen} setIsOpen={setIsLanguageModalOpen} title={t("general.update-language")}>
        <div className="mt-6">
          <div className="flex justify-center items-center">
            <MultiSelector 
            options={languageOptions} 
            onChange={(event: ChangeEvent<HTMLSelectElement>) => {setSelectedLanguage(event.target.value);}}
            defaultValue={selectedLanguage}/>
          </div>          
          <div className="flex justify-center space-x-4 mt-6">
            <Button label={t("general.update")} onClick={() => handleLanguageSubmission()}/>
            <Button label={t("general.cancel")} onClick={() => setIsLanguageModalOpen(false)}/>
          </div>
        </div>
      </Modal>

      {/* Currency Modal*/}
      <Modal isOpen={isCurrencyModalOpen} setIsOpen={setIsCurrencyModalOpen} title={t("general.update-currency")}>
          <div className="mt-6">
            <div className="flex justify-center items-center">
              <MultiSelector 
              options={currencyOptions} 
              onChange={(event: ChangeEvent<HTMLSelectElement>) => setSelectedCurrency(event.target.value)}
              defaultValue={selectedCurrency}/>
            </div>          
            <div className="flex justify-center space-x-4 mt-6">
            <Button label={t("general.update")} onClick={() => handleCurrencySubmission()}/>
            <Button label={t("general.cancel")} onClick={() => setIsCurrencyModalOpen(false)}/>
            </div>
          </div>
        </Modal>
      <h1 className="text-m font-medium mb-4">{t("general.others")}</h1>
      <div className="border-t border-gray-300" />
      <div className="grid grid-rows gap-6 mt-6">
        {OthersItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-left text-sm">{item.value}</div>

            <span className="col-span-1 flex justify-end cursor-pointer" onClick={() => item.updateSetting()}>
              <PencilIcon className="h-5 w-5 hover:text-indigo-700" />
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
