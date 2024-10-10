import {
  Blogs,
  ConnectOurCustomers,
  Enterprise,
  Footer,
  Hero,
  OurServices,
  Reviews,
} from '@/components';

export default function Home() {
  return (
    <>
      <Hero />
      <OurServices />
      <Reviews />
      <ConnectOurCustomers />
      <Blogs />
      <Enterprise />
      <Footer />
    </>
  );
}
