'use client'
import Breadcrumb from "@/components/Common/Breadcrumb";
import {useTranslations} from 'next-intl';

const DisclaimerPage = () => {
const msg = useTranslations('disclaimer');
const footer = useTranslations('footer');
  return (
    <>
      <Breadcrumb
        pageName={footer('disclaimer')}
        description={`<p>${msg('content.1')}</p><br><p>${msg('content.2')}</p><br><p>${msg('content.3')}</p><br><p>${msg('content.4')}</p><br><b>${msg('bold.1')}</b><br><p>${msg('content.5')}</p><br><b>${msg('bold.2')}</b><br><p>${msg('content.6')}</p>`}
      />
    </>
  );
};

export default DisclaimerPage;
