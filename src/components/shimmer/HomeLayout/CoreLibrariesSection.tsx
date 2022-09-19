import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import {
  Identity,
  IotaCore,
  Streams,
  Stronghold,
  Wallet,
} from '../../../icons';

interface LanguagesProps {
  languages?: { [key: string]: string };
}

const Languages: FC<LanguagesProps> = (props) => {
  return (
    <>
      {Object.entries(props.languages).length > 0 && (
        <div className='languages'>
          {Object.entries(props.languages).map(([language, to], key) => (
            <Link
              className='language button button--outline button--primary'
              to={to}
              key={key}
            >
              {language}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

const LibrariesSection: FC = () => (
  <div className='libraries__cards'>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <IotaCore />
          </div>
          <Languages
            languages={{
              Rust: '/iota.rs/develop/libraries/rust/getting_started',
              NodeJS: '/iota.rs/develop/libraries/nodejs/getting_started',
              Python: '/iota.rs/develop/libraries/python/getting_started',
              Java: '/iota.rs/develop/libraries/java/getting_started',
            }}
          />
        </div>
        <h3 className='libraries__header'>Client</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/iota.rs/develop/examples/get_info'>
              Interact with the IOTA network
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/iota.rs/develop/examples/data_message'>Send a data message</Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/iota.rs/develop/explanations/messages_payloads_and_transactions'>
              Learn about transactions
            </Link>
          </li>
        </ul>
        <Link
          to='/iota.rs/develop/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Get started
        </Link>
      </div>
    </div>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Wallet />
          </div>
          <Languages
            languages={{
              Rust: '/wallet.rs/develop/libraries/rust/getting_started',
              NodeJS: '/wallet.rs/develop/libraries/nodejs/getting_started',
              Python: '/wallet.rs/develop/libraries/python/getting_started',
            }}
          />
        </div>
        <h3 className='libraries__header'>Wallet</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/wallet.rs/explanations/nutshell'>
              The library in a nutshell
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/wallet.rs/examples/rust#backup-and-restore-example'>
              Store account data
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/wallet.rs/examples/rust#transfer-example'>
              Transfer tokens
            </Link>
          </li>
        </ul>
        <Link
          to='/wallet.rs/develop/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Integrate a wallet
        </Link>
      </div>
    </div>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <IotaCore />
          </div>
          <Languages
            languages={{
              TypeScript: '/iotajs/welcome',
            }}
          />
        </div>
        <h3 className='libraries__header'>TypeScript Client</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/iotajs/how_tos/simple'>
              Interact with the IOTA network
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/iotajs/how_tos/data'>Send a data message</Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/iotajs/how_tos/transaction'>
              Learn about transactions
            </Link>
          </li>
        </ul>
        <Link
          to='/iotajs/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Get started
        </Link>
      </div>
    </div>
  </div>
);

export default LibrariesSection;