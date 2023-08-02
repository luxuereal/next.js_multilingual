'use client'
import Breadcrumb from "@/components/Common/Breadcrumb";
import {useTranslations} from 'next-intl';

const CopyrightPolicyPage = () => {
const msg = useTranslations('copyright');
const footer = useTranslations('footer');
  return (
    <>
      <Breadcrumb
        pageName={footer('copyright')}
        description={`<b>${msg('bold.1')}</b><br><p>${msg('content.1')}</p><br><p>${msg('content.2')}</p><br><p>${msg('content.3')}</p><br><b>${msg('bold.2')}</b><br><b>${msg('bold.3')}</b><br><ol type="a"><li>${msg('content.4.1')}</li><li>${msg('content.4.2')}</li><li>${msg('content.4.3')}</li><li>${msg('content.4.4')}</li></ol><br><b>${msg('bold.4')}</b><br><p>${msg('content.5')}</p><br><p>${msg('content.6')}</p><br><b>${msg('bold.5')}</b><br><p>${msg('content.7')}</p><br><p>${msg('content.8')}</p><br><b>${msg('bold.6')}</b><br><p>${msg('content.9')}</p><br>`}
      />
    </>
  );
};

export default CopyrightPolicyPage;
