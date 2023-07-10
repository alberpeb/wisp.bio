import Navbar from './Navbar';

const Body = () => {
  return (
    <div>
      <h1>Your All-in-One Social Hub</h1>
      <p>
        Our platform simplifies and enhances your online presence by consolidating all your social
        media links in one convenient place. Whether you&apos;re an influencer, entrepreneur, or
        simply want to share your digital footprint with the world, Wisp.bio is here to help
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023</p>
    </footer>
  );
};

export default async function Landing() {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}
