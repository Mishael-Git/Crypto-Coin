import React from "react";
import Wrapper from "./Wrapper";

function Features() {
  return (
    <Wrapper>
      <div className="  md:flex md:flex-col sm:flex-col  items-center px-[10%]   py-[4%]">
        <div className="py-10">
          <h1 class="text-3xl font-bold">FEATURES</h1>
        </div>
        <div>
          <ol class="space-y-4 text-lg font-medium">
            <dt>
              Cryptocurrency is a digital or virtual form of currency that
              utilizes cryptography for secure financial transactions, control
              the creation of new units, and verify the transfer of assets. Here
              are some key features of cryptocurrencies:
            </dt>
            <li>
              Decentralization: Cryptocurrencies operate on decentralized
              networks, such as blockchain technology, where no central
              authority or government controls the currency. Transactions are
              verified and recorded by a distributed network of computers,
              ensuring transparency and security.
            </li>
            <li>
              Security: Cryptocurrencies employ cryptographic techniques to
              secure transactions and control the creation of new units. This
              makes them highly resistant to fraud and counterfeiting. The use
              of public and private key cryptography ensures secure ownership
              and transfer of assets.
            </li>
            <li>
              Anonymity and Privacy: While not all cryptocurrencies offer
              complete anonymity, many provide varying degrees of privacy
              protection. Users can hold and transact with cryptocurrencies
              without revealing their real-world identities, offering a certain
              level of confidentiality.
            </li>
            <li>
              Transparency: Although individual users can remain anonymous,
              cryptocurrencies typically offer transparent and publicly
              accessible transaction records. Blockchain technology enables
              anyone to view the transaction history, ensuring accountability
              and trust.
            </li>
            <li>
              Global Accessibility: Cryptocurrencies operate on the internet,
              allowing for borderless transactions. Users can send and receive
              funds instantly across the globe without the need for
              intermediaries such as banks. This accessibility is particularly
              beneficial for individuals in underbanked or financially
              underserved regions.
            </li>
            <li>
              Limited Supply: Most cryptocurrencies have a predefined maximum
              supply or follow a predetermined inflation schedule. For example,
              Bitcoin has a maximum supply of 21 million coins. This limited
              supply helps maintain scarcity, which can contribute to the store
              of value and potential price appreciation of cryptocurrencies.
            </li>
            <li>
              Peer-to-Peer Transactions: Cryptocurrencies enable direct
              transactions between parties without the need for intermediaries
              like banks. This peer-to-peer nature eliminates the need for
              traditional financial institutions, reduces transaction costs, and
              increases transaction speed.
            </li>
            <li>
              Programmability: Smart contract platforms, such as Ethereum, allow
              the creation of decentralized applications (dApps) and the
              execution of programmable contracts. This feature enables the
              development of various applications on top of the blockchain,
              including decentralized finance (DeFi), non-fungible tokens
              (NFTs), and more.
            </li>
            <li>
              Accessibility and Inclusion: Cryptocurrencies provide access to
              financial services for individuals who may not have had access to
              traditional banking systems. They offer an opportunity for
              financial inclusion, enabling people to control their funds, store
              value, and participate in the global economy.
            </li>
            <dt>
              It's important to note that while these features generally apply
              to cryptocurrencies, specific cryptocurrencies may differ in terms
              of their implementation and functionality.
            </dt>
          </ol>
        </div>
      </div>
    </Wrapper>
  );
}

export default Features;
