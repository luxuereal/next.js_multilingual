'use client'
import Breadcrumb from "@/components/Common/Breadcrumb";
import {useTranslations} from 'next-intl';

const CopyrightPolicyPage = () => {
const msg = useTranslations('TAC');
const footer = useTranslations('footer');
  return (
    <>
      <Breadcrumb
        pageName={footer('tos')}
        description={`<b>${msg('bold.1')}</b><br><p>${msg('content.1')}</p><br><p>${msg('content.2')}</p><br><p>${msg('content.3')}</p><br><b>${msg('bold.2')}</b><br><p>${msg('content.4')}</p><br><b>${msg('bold.3')}</b><br><p>${msg('content.5')}</p><br><p>${msg('content.6')}</p><br><p>${msg('content.7.1')}</p><p>${msg('content.7.2')}</p><p>${msg('content.7.3')}</p><p>${msg('content.7.4')}</p><br><ol><li>&nbsp;${msg('content.8.1')}</li><li>&nbsp;${msg('content.8.2')}</li><li>&nbsp;${msg('content.8.3')}</li><li>&nbsp;${msg('content.8.4')}</li><li>&nbsp;${msg('content.8.5')}</li><li>&nbsp;${msg('content.8.6')}</li><li>&nbsp;${msg('content.8.7')}</li><li>&nbsp;${msg('content.8.8')}</li></ol><br><p>${msg('content.9')}</p><br><b>${msg('bold.4')}</b><br><p>${msg('content.10')}</p><br><p>&nbsp;${msg('content.11.1')}</p><p>&nbsp;${msg('content.11.2')}</p><p>&nbsp;${msg('content.11.3')}</p><p>&nbsp;${msg('content.11.4')}</p><br><b>${msg('bold.5')}</b><p>&nbsp;${msg('content.12.1')}</p><p>&nbsp;${msg('content.12.2')}</p><p>&nbsp;${msg('content.12.3')}</p><br><b>${msg('bold.6')}</b><p>${msg('content.13')}</p><br><p>${msg('content.14')}</p><br><b>${msg('bold.7')}</b><p>&nbsp;${msg('content.15.1')}</p><p>&nbsp;${msg('content.15.2')}</p><p>&nbsp;${msg('content.15.3')}</p><p>&nbsp;${msg('content.15.4')}</p><br><b>${msg('bold.8')}</b><p>${msg('content.16')}</p><br><p>&nbsp;${msg('content.17.1')}</p><p>&nbsp;${msg('content.17.2')}</p><p>&nbsp;${msg('content.17.3')}</p><p>&nbsp;${msg('content.17.4')}</p><p>&nbsp;${msg('content.17.5')}</p><br><b>${msg('bold.9')}</b><br><p>${msg('content.18')}</p><br><b>${msg('bold.10')}</b><p>${msg('content.19')}</p><br><p>${msg('content.20')}</p><br><p>${msg('content.21.1')}</p><br><p>${msg('content.21.2')}</p><br><p>${msg('content.21.3')}</p><br><p>${msg('content.21.4')}</p><br><p>${msg('content.21.5')}</p><br><p>${msg('content.21.6')}</p><br><p>${msg('content.21.7')}</p><br><p>${msg('content.21.8')}</p><br><p>${msg('content.21.9')}</p><br><p>${msg('content.21.10')}</p><br><p>${msg('content.21.11')}</p><br><p>${msg('content.21.12')}</p><br><p>${msg('content.22')}</p><br><p>${msg('content.23')}</p><br><b>${msg('bold.11')}</b><p>${msg('content.24')}</p><br><b>${msg('bold.12')}</b><p>${msg('content.25')}</p><br><p>${msg('content.26')}</p><br><br><p><b>${msg('bold.13')}</b></p><br><p>${msg('content.27')}</p><br><p>${msg('content.28')}</p><br><p>${msg('content.29')}</p><br><p>${msg('content.30')}</p><br><p>${msg('content.31')}</p><br><p>${msg('content.32')}</p><br><p><b>${msg('bold.14')}</b></p><br><p>${msg('content.33')}</p><br><br><br><p><b>${msg('bold.15')}</b></p><br><p>${msg('content.34')}</p><br><p><b>${msg('bold.16')}</b></p><br><p>${msg('content.35')}</p><br><p><b>${msg('bold.17')}</b></p><br><p>${msg('content.36')}</p><br><p>${msg('content.37')}</p><br><p>${msg('content.38')}</p><br><p><b>${msg('bold.18')}</b></p><br><p>${msg('content.39')}<b>${msg('bold.19')}</b></p>`}
      />
    </>
  );
};

export default CopyrightPolicyPage;
