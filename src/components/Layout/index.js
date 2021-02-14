import Navbar from '../Navbar';
import { ContentLayout } from './styles';

function Layout({children}) {
  return (
      <>
        <Navbar />
        <ContentLayout>
          {children}
        </ContentLayout>
      </>
  );
}

export default Layout;