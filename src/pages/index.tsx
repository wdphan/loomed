import { FC } from 'react'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Group1 from '/Users/williamphan/Desktop/Developer/wreath/public/Group1.jpeg'
import Group2 from '/Users/williamphan/Desktop/Developer/wreath/public/Group2.jpeg'
import Group3 from '/Users/williamphan/Desktop/Developer/wreath/public/Group3.jpeg'
import Group4 from '/Users/williamphan/Desktop/Developer/wreath/public/Group4.jpeg'
import Group5 from '/Users/williamphan/Desktop/Developer/wreath/public/Group5.jpeg'
import { Main } from 'next/document'

const Home: FC = () => {
	return (
		<div className="relative flex items-top justify-center min-h-screen dark:bg-black sm:items-center sm:pt-0">
			<div className="max-w-7xl mx-auto ">
				<h1 className="mb-10 font-Grotesk text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#00FF38] to-white">
					Wreath
				</h1>
				<div className="">
					<div className="flex items-center justify-center space-x-10 ">
						<div className="">
							<a
								href="https://testnets.opensea.io/assets/goerli/0xa0fe77fc0ba58c6e85f59fd47ac375990e0bdc2e/0/"
								className=""
							>
								<Image src={Group1} alt="Picture of the author" width={500} height={500} />
							</a>
						</div>

						<div className="">
							<a
								href="https://testnets.opensea.io/assets/goerli/0xa0fe77fc0ba58c6e85f59fd47ac375990e0bdc2e/1/"
								className=""
							>
								<Image src={Group2} alt="Picture of the author" width={500} height={500} />
							</a>
						</div>

						<div className="">
							<a
								href="https://testnets.opensea.io/assets/goerli/0xa0fe77fc0ba58c6e85f59fd47ac375990e0bdc2e/2/"
								className=""
							>
								<Image src={Group3} alt="Picture of the author" width={500} height={500} />
							</a>
						</div>

						<div className="">
							<a
								href="https://testnets.opensea.io/assets/goerli/0xa0fe77fc0ba58c6e85f59fd47ac375990e0bdc2e/3/"
								className=""
							>
								<Image src={Group4} alt="Picture of the author" width={500} height={500} />
							</a>
						</div>

						<div className="">
							<a
								href="https://testnets.opensea.io/assets/goerli/0xa0fe77fc0ba58c6e85f59fd47ac375990e0bdc2e/4/"
								className=""
							>
								<Image src={Group5} alt="Picture of the author" width={500} height={500} />
							</a>
						</div>
					</div>
				</div>

				<div className="text-center text-sm text-white">
					<h1 className="mt-10 mb-5 text-6xl font-Grotesk">5 edition for 5 individuals.</h1>
					<h1 className=" mb-10 text-6xl font-Grotesk text-[#A4A4A4]">No more. No less.</h1>

					<a href="https://testnets.opensea.io/collection/wreath">
						<button className="rounded-3xl bg-[#00FF38] text-black px-8 py-4 font-Inter text-3xl font-medium">
							Collection
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Home
