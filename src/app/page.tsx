"use client";
import { Layout } from '@/components/layout'
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import { Header } from '@/layout/Header';
import { Link } from 'next-view-transitions';
import { motion } from 'framer-motion';


export default function Home() {

	return (
		<Layout>
			<Header />
			<motion.div initial={{
				scale: 0.5,
				y: -100,
				opacity: 0,
			}} animate={{
				scale: 1,
				y: 0,
				opacity: 1
			}} transition={{
				type: 'spring',
				stiffness: 600,
				damping: 50,
				mass: 3
			}} className="w-full overflow-hidden">
				<MacbookScroll
					title={
						<span className='text-primary'>
							Get-Infos <br /> Made by Raphaël | Raxuis
						</span>
					}
					badge={
						<Link href="https://raphaelraclot.vercel.app/">
							<Badge className="size-10 -rotate-12 rounded-full object-cover duration-300 hover:scale-105" />
						</Link>
					}
					src={`/darkmode-products-page.jpeg`}
					showGradient={false}
				/>
			</motion.div>
		</Layout >
	)
}
const Badge = ({ className }: { className?: string }) => {
	return (
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="24"
			height="24"
			viewBox="0 0 512 512"
			fill="none"
			className={className}
			enableBackground="new 0 0 512 512">
			<path fill="#000000" opacity="1.000000" stroke="none"
				d="
M322.000000,513.000000 
	C214.692734,513.000000 107.885460,513.000000 1.039095,513.000000 
	C1.039095,342.401031 1.039095,171.802063 1.039095,1.101549 
	C171.557281,1.101549 342.114624,1.101549 512.835999,1.101549 
	C512.835999,171.666534 512.835999,342.333252 512.835999,513.000000 
	C449.468719,513.000000 385.984344,513.000000 322.000000,513.000000 
M192.500076,103.164291 
	C177.035599,103.164291 161.571136,103.164291 145.622437,103.164291 
	C145.937393,106.218681 146.187042,108.819412 146.476562,111.415695 
	C147.619415,121.664452 149.734848,131.908279 149.772491,142.160248 
	C150.053955,218.804138 149.930771,295.449554 149.902100,372.094482 
	C149.901169,374.579529 149.644043,377.075073 149.352478,379.547577 
	C148.129654,389.917542 146.848190,400.280548 145.553741,410.929626 
	C161.045364,410.929626 176.125885,410.929626 191.871689,410.929626 
	C183.951813,369.252899 188.443832,327.461975 186.961990,285.305389 
	C189.259552,285.305389 190.878983,285.305389 192.498428,285.305389 
	C205.494736,285.305389 218.520355,285.830505 231.476349,285.107849 
	C239.215057,284.676178 244.239853,286.820648 247.797821,293.749847 
	C250.056717,298.149109 253.455856,301.954224 256.252655,306.087372 
	C279.151764,339.928131 304.979187,371.858276 323.257355,408.731720 
	C323.888885,410.005737 326.328949,411.039642 327.943909,411.065308 
	C340.104034,411.258575 352.268646,411.179077 364.431824,411.157623 
	C365.645844,411.155457 366.859528,410.971527 368.625702,410.826630 
	C367.567352,409.184113 366.881073,408.092438 366.168976,407.017883 
	C346.784790,377.767212 327.366913,348.538788 308.026062,319.259521 
	C299.692932,306.644379 292.018311,293.521545 279.676453,284.148499 
	C279.478333,283.998047 279.499634,283.558716 279.400848,283.187836 
	C281.187347,282.790955 282.958954,282.394684 284.731812,282.003967 
	C338.231171,270.214233 369.245361,213.338623 348.786224,162.634842 
	C334.034973,126.077011 304.883759,107.342796 266.418152,104.271423 
	C242.236832,102.340599 217.814377,103.429893 192.500076,103.164291 
z"/>
			<path fill="#FEFEFE" opacity="1.000000" stroke="none"
				d="
M193.000092,103.164291 
	C217.814377,103.429893 242.236832,102.340599 266.418152,104.271423 
	C304.883759,107.342796 334.034973,126.077011 348.786224,162.634842 
	C369.245361,213.338623 338.231171,270.214233 284.731812,282.003967 
	C282.958954,282.394684 281.187347,282.790955 279.400848,283.187836 
	C279.499634,283.558716 279.478333,283.998047 279.676453,284.148499 
	C292.018311,293.521545 299.692932,306.644379 308.026062,319.259521 
	C327.366913,348.538788 346.784790,377.767212 366.168976,407.017883 
	C366.881073,408.092438 367.567352,409.184113 368.625702,410.826630 
	C366.859528,410.971527 365.645844,411.155457 364.431824,411.157623 
	C352.268646,411.179077 340.104034,411.258575 327.943909,411.065308 
	C326.328949,411.039642 323.888885,410.005737 323.257355,408.731720 
	C304.979187,371.858276 279.151764,339.928131 256.252655,306.087372 
	C253.455856,301.954224 250.056717,298.149109 247.797821,293.749847 
	C244.239853,286.820648 239.215057,284.676178 231.476349,285.107849 
	C218.520355,285.830505 205.494736,285.305389 192.498428,285.305389 
	C190.878983,285.305389 189.259552,285.305389 186.961990,285.305389 
	C188.443832,327.461975 183.951813,369.252899 191.871689,410.929626 
	C176.125885,410.929626 161.045364,410.929626 145.553741,410.929626 
	C146.848190,400.280548 148.129654,389.917542 149.352478,379.547577 
	C149.644043,377.075073 149.901169,374.579529 149.902100,372.094482 
	C149.930771,295.449554 150.053955,218.804138 149.772491,142.160248 
	C149.734848,131.908279 147.619415,121.664452 146.476562,111.415695 
	C146.187042,108.819412 145.937393,106.218681 145.622437,103.164291 
	C161.571136,103.164291 177.035599,103.164291 193.000092,103.164291 
M307.541504,167.054001 
	C298.060577,149.027313 283.070892,138.535919 262.922821,136.998474 
	C245.861328,135.696579 228.666214,136.108749 211.528885,135.853622 
	C203.572678,135.735184 195.613235,135.833405 187.570724,135.833405 
	C187.570724,175.090805 187.570724,213.923187 187.570724,252.927017 
	C208.788940,252.927017 229.605484,252.978821 250.421371,252.885941 
	C254.903397,252.865952 259.402649,252.495575 263.860107,251.988892 
	C275.806183,250.630966 287.062988,247.294098 296.075562,238.867432 
	C315.283783,220.907928 319.875793,192.783783 307.541504,167.054001 
z"/>
			<path fill="#010101" opacity="1.000000" stroke="none"
				d="
M307.717682,167.385376 
	C319.875793,192.783783 315.283783,220.907928 296.075562,238.867432 
	C287.062988,247.294098 275.806183,250.630966 263.860107,251.988892 
	C259.402649,252.495575 254.903397,252.865952 250.421371,252.885941 
	C229.605484,252.978821 208.788940,252.927017 187.570724,252.927017 
	C187.570724,213.923187 187.570724,175.090805 187.570724,135.833405 
	C195.613235,135.833405 203.572678,135.735184 211.528885,135.853622 
	C228.666214,136.108749 245.861328,135.696579 262.922821,136.998474 
	C283.070892,138.535919 298.060577,149.027313 307.717682,167.385376 
z"/>
		</svg>
	);
};
