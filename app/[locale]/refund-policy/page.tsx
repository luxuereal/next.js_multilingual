'use client'
import Breadcrumb from "@/components/Common/Breadcrumb";
import {useTranslations} from 'next-intl';

const RefundPolicyPage = () => {
const msg = useTranslations('refundPolicy');
const footer = useTranslations('footer');
  return (
    <>
      <Breadcrumb
        pageName={footer('refund')}
        description={`<p>${msg('content.1')}</p><br><p>${msg('content.2')}</p><br><p>${msg('content.3')}</p><br><p>${msg('content.4')}</p><br><p>${msg('content.5')}</p><br><p>${msg('content.6')}</p><br><b>${msg('bold.1')}</b><br><p>${msg('content.7')}</p><br><b>${msg('bold.2')}</b><br><p>${msg('content.8')}</p><br>
        <b>${msg('bold.3')}</b><br><p>${msg('content.9')}</p><br><b>${msg('bold.4')}</b><br><p>${msg('content.10')}</p><br><b>${msg('bold.5')}</b><br><p>${msg('content.11')}</p><br><p>${msg('content.12')}</p>`}
      />
    </>
  );
};

export default RefundPolicyPage;
