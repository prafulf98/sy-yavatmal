import { useLocation } from 'react-router-dom';

const PageHeader = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const pathTitleMap = {
    '/about': 'About',
    '/about-shree-mataji': 'About Shree Mataji',
    '/about-yavatmal-sahajyoga': 'About Yavatmal Sahajyoga',
    '/about-sahajyoga': 'About Sahajyoga',
    '/contact-us': 'Contact Us',
    '/donation': 'Donation',
    '/login': 'Login',
    '/events': 'Events',
    '/prachar-prasar': 'Prachar Prasar',
  };

  let pageTitle = '';

  if (pathName === '/') {
    return null;
  }else if (pathName.startsWith('/centers/')) {
    pageTitle = 'Our Centers';
  } else if (pathName.startsWith('/events/')) {
    pageTitle = 'Sahajyoga Events';
  }else if (pathName.startsWith('/prachar-prasar/')) {
    pageTitle = 'Sahajyoga Prachar Prasar';
  } else {
    pageTitle = pathTitleMap[pathName] || pathName;
  }

  return (
    <div className="h-20 md:h-24 lg:h-32 w-full flex items-center justify-center bg-gradient-to-r from-pink-900 to-pink-500 drop-shadow-2xl !z-0">
      <div className="max-w-7xl w-full px-4">
        <h1 className="text-white text-3xl font-semibold shadow-2xl capitalize">
          {pageTitle}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
