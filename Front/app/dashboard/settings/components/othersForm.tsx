'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from '@/i18n/client';
import { languageDict, languageOptions } from '@/i18n/settings';
import { PencilIcon } from '@heroicons/react/outline';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function OthersForm() {
  const { i18n } = useTranslation();
  const { t } = useTranslation('settings');
  const i18nCookie = getCookie(
    process.env.NEXT_PUBLIC_I18N_COOKIE_NAME as string
  ) as string;
  const defaultLanguage = languageDict[i18nCookie];
  const defaultCurrency = 'Dollar'; //get from session or cookie

  const [isLanguageDialogOpen, setIsLanguageDialogOpen] = useState(false);
  const [isCurrencyDialogOpen, setIsCurrencyDialogOpen] = useState(false);
  const [language, setLanguage] = useState(defaultLanguage);
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  const [currency, setCurrency] = useState(defaultCurrency);
  const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);

  const currencyOptions = [
    { value: 'Dollar', label: 'USD' },
    { value: 'Euro', label: 'EUR' },
  ];

  const items = [
    {
      label: t('general.language'),
      value: language,
      updateSetting: () => {
        setIsLanguageDialogOpen(true);
      },
    },
    // {
    //   label: t('general.currency'),
    //   value: currency,
    //   updateSetting: () => {
    //     setIsCurrencyDialogOpen(true);
    //   },
    // },
  ];

  //#region Hooks
  useEffect(() => {
    if (!isLanguageDialogOpen) {
      setSelectedLanguage(language);
    }
  }, [isLanguageDialogOpen]);

  useEffect(() => {
    if (!isCurrencyDialogOpen) {
      setSelectedCurrency(currency);
    }
  }, [isCurrencyDialogOpen]);

  //#endregion

  //#region functions
  const handleLanguageSubmission = () => {
    //update language in cookie or session
    setLanguage(selectedLanguage);
    const label = Object.keys(languageDict).find(
      (key) => languageDict[key] === selectedLanguage
    );
    i18n.changeLanguage(label);
    setIsLanguageDialogOpen(false);
    toast.success(t('general.successfully-updated-language'));
  };

  const handleCurrencySubmission = async () => {
    //update currency in cookie or session
    setCurrency(selectedCurrency);
    setIsCurrencyDialogOpen(false);
    toast.success(t('general.successfully-updated-currency'));
  };
  //#endregion
  return (
    <>
      {/* Language Dialog*/}
      <Dialog
        open={isLanguageDialogOpen}
        onOpenChange={() => setIsLanguageDialogOpen(false)}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t('general.update-language')}</DialogTitle>
          </DialogHeader>
          <div>
            <Select
              onValueChange={(value: string) => {
                setSelectedLanguage(value);
              }}
              defaultValue={selectedLanguage}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {languageOptions.map((option) => (
                    <SelectItem key={option.label} value={option.value}>
                      {option.value}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button onClick={() => handleLanguageSubmission()}>
              {t('general.update')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Currency Dialog*/}
      <Dialog
        open={isCurrencyDialogOpen}
        onOpenChange={setIsCurrencyDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('general.update-currency')}</DialogTitle>
          </DialogHeader>
          <div>
            <Select
              onValueChange={(value: string) => {
                setSelectedCurrency(value);
              }}
              defaultValue={selectedCurrency}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {currencyOptions.map((option) => (
                    <SelectItem key={option.label} value={option.value}>
                      {option.value}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button onClick={() => handleCurrencySubmission()}>
              {t('general.update')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <h3 className="text-lg font-medium">{t('general.others')}</h3>
      <Separator
        orientation="horizontal"
        className="col-start-1 col-end-4 mt-5 "
      />
      <div className="grid grid-rows gap-6 mt-6">
        {items.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center">
            <span className="col-span-1 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-left text-sm">{item.value}</div>
            <span
              className="col-span-1 flex justify-end cursor-pointer"
              onClick={() => item.updateSetting()}
            >
              <PencilIcon className="h-5 w-5 hover:text-indigo-700" />
            </span>
            {index !== items.length - 1 && (
              <Separator
                orientation="horizontal"
                className="col-start-1 col-end-4 mt-5 "
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
