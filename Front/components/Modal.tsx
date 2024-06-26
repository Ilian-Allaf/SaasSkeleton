import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { XIcon } from '@heroicons/react/outline'

type ModalProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
  };

export default function Modal({isOpen, setIsOpen, title, subtitle, children}: ModalProps) {

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-0"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-0"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-bright-background rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 "
                  >
                    {title}
                  </Dialog.Title>
                  <button onClick={closeModal} className="hover:text-gray-700 focus:outline-none">
                    <XIcon className="h-6 w-6" />
                  </button>
                </div>
                  
                  {subtitle && (<p className="text-sm mb-4">{subtitle}</p>)}
                  
                  {children}
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
