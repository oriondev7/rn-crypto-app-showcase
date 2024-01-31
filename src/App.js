import { Download, Features, SectionWrapper } from "./components";
import assets from './assets';
import styles from "./styles/Global";

export const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using Crypto Marketplace."
        showButton
        mockupImage={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of Crypto Marketpalce. Smooth constant colors of a fluent UI design."
        mockupImage={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="Crypto Marketplace is built using React Native CLI which runs natively on all users' devices."
        mockupImage={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImage={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="
        px-4 
        py-2 
        jystify-center 
        items-center 
        bg-primary 
        flex-col
        text-center
        banner04
      ">
        <p className={`
        ${styles.pText}
        ${styles.whiteText}
        `}>
          See you on {" "}
          <span className="font-bold">
            Crypto Marketplace
          </span>
        </p>
      </div>
    </>
  );
}

export default App;
