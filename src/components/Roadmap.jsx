import React from 'react'
import toplayer from '../assets/webp/top_blue_layer.webp'
import bottomlayer from '../assets/webp/bottom_blue_layer.webp'
import arrowleft from '../assets/svg/Arrow-left.svg'
import arrowright from '../assets/svg/Arrow-right.svg'
import check from '../assets/svg/check.svg'
const Roadmap = () => {
    return (
        <>
            <section>
                <img className=' z-10 w-full -mb-2' src={toplayer} alt="top-blue-layer" />
                <div className=' bg-dark_blue '>
                    <div className=' container max-w-[1140px] max-xl:pe-5 relative pb-[310px] md:pb-[170px] lg::pb-[250px]'>
                        <h2 class="text-center font-Dela font-normal text-[28px] md:text-[34px] lg:text-[40px] leading-[40px] text-white lg:leading-[48px]">Roadmap</h2>
                        <div className=' pt-[48px] md:pt-[80px] lg:pt-[137px] pb-[20px] lg:pb-[40px] xl:pb-[75px]'>
                            <div class=" max-md:max-w-[500px] max-md:mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-[100%] before:w-[4px] lg:before:w-[6px] before:bg-gradient-to-b before:from-transparent before:bg-white before:bottom-[90px]  ">
                                <div class="relative flex  justify-between md:justify-normal md:even:flex-row-reverse group is-active">
                                    <div className="flex relative justify-center w-[50px] lg:w-[75px] h-[50px] lg:h-[75px] border-white border-[3px] border-dashed rounded-full  bg-dark_red    shrink-0 md:order-1 max-md:translate-x-[-5px] translate-x-[25%] lg:translate-x-0  items-center">
                                        <img className=' -z-30  absolute max-sm:left-[20px] min-w-[80px] sm:min-w-[100px] md:min-w-[130px] lg:min-w-[180px] xl:min-w-[200px]' src={arrowright} alt="right-arrow" /> 
                                        <div className=' bg-white w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] rounded-full'></div>
                                       
                                    </div>
                                    <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                                        <div class="flex flex-col md:items-end max-sm:ps-[50px] max-md:ps-[80px] md:pe-[133px]">
                                            <h4 class=" font-Dela font-normal text-[22px] lg:text-[26px] leading-[22px] lg:leading-[37px] text-white"> <span className='ps-1'>Phase 1</span> <span className=' block text-[16px] lg:text-[22px] leading-[25px] lg:leading-[31px]'>Q1 - Q2 (2024)</span></h4>
                                        </div>
                                    </div>
                                    <div className=' absolute duration-300 ease-linear hover:shadow-5xl max-md:top-[85px] max-sm:left-[35px] max-md:left-[145px]  !right-0 top-[-67px] max-w-[290px] lg:max-w-[382px] p-5 lg:p-[29px] w-full rounded-[10px] border-[2px] shadow-4xl border-[#FFFFFF29] flex flex-col gap-2 lg:gap-3'>
                                        <h3 className=' text-white font-Dela font-normal text-[20px] lg:text-[26px] leading-[22px] lg:leading-[37px]  pt-[3px]'>Launchpad Ignition</h3>
                                        <div className=' flex items-center gap-[10px] pt-[3px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Create TROLLMP on Ethereum.</p>
                                        </div>
                                        <div className=' flex items-center gap-[10px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Build a strong community.</p>
                                        </div>
                                        <div className=' flex items-center gap-[10px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Conduct a Spacedrop event.</p>
                                        </div>
                                    </div>  
                                </div>
                                <div class="relative z-30 flex !mt-[250px] md:!mt-[150px] lg:!mt-[214px]  justify-between md:justify-normal md:even:flex-row-reverse group is-active">
                                    <div className="flex rel z-30 justify-center w-[50px] lg:w-[75px] h-[50px] lg:h-[75px] border-white border-[3px] border-dashed rounded-full  bg-dark_red max-md:translate-x-[-5px] translate-x-[-25%] lg:translate-x-0     shrink-0 md:order-1   items-center">
                                        <div className=' bg-white w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] rounded-full'></div>
                                        <img className='md:hidden absolute max-sm:left-[20px] min-w-[80px] sm:min-w-[100px] md:min-w-[130px] lg:min-w-[180px] xl:min-w-[200px]' src={arrowright} alt="right-arrow" />
                                        <img className='max-md:hidden absolute max-sm:left-[20px] min-w-[80px] sm:min-w-[100px] md:min-w-[130px] lg:min-w-[180px] xl:min-w-[200px]' src={arrowleft} alt="left-arrow" />

                                    </div>
                                    <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                                        <div class="flex flex-col max-sm:ps-[50px] ps-[80px] md:ps-[133px]">
                                            <h4 class=" font-Dela font-normal text-[22px] lg:text-[26px] leading-[22px] lg:leading-[37px] text-white"> <span className='ps-1'>Phase 2</span> <span className=' block text-[16px] lg:text-[22px] leading-[25px] lg:leading-[31px]'>Q3 - Q4 (2024)</span></h4>
                                        </div>
                                    </div>
                                    <div className=' duration-300 ease-linear hover:shadow-5xl absolute max-md:top-[85px]  max-sm:left-[35px] max-md:left-[145px] left-0 top-[-67px] max-w-[290px] lg:max-w-[382px] p-5 lg:p-[29px] w-full rounded-[10px] border-[2px] shadow-4xl border-[#FFFFFF29] flex flex-col gap-2 lg:gap-3'>
                                        <h3 className=' text-white font-Dela font-normal text-[20px] lg:text-[26px] leading-[22px] lg:leading-[37px] '>Lunar Liftoff</h3>
                                        <div className=' flex items-center pt-[3px] gap-[10px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>List on exchanges.</p>
                                        </div>
                                        <div className=' flex items-center gap-[10px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Establish liquidity pools.</p>
                                        </div>
                                        <div className=' flex items-center gap-[10px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Launch a marketing campaign.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative flex !mt-[250px] md:!mt-[150px] lg:!mt-[214px]  justify-between md:justify-normal md:even:flex-row-reverse group is-active">
                                    <div className="flex relative z-30 justify-center w-[50px] lg:w-[75px] h-[50px] lg:h-[75px] border-white border-[3px] border-dashed rounded-full  bg-dark_red    shrink-0 md:order-1 max-md:translate-x-[-5px] translate-x-[25%] lg:translate-x-0  items-center">
                                        <div className=' bg-white w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] rounded-full'></div>
                                        <img className=' absolute max-sm:left-[20px] min-w-[80px] sm:min-w-[100px] md:min-w-[130px] lg:min-w-[180px] xl:min-w-[200px]' src={arrowright} alt="right-arrow" />

                                    </div>
                                    <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                                        <div class="flex flex-col md:items-end max-sm:ps-[50px] max-md:ps-[80px] md:pe-[133px]">
                                            <h4 class=" font-Dela font-normal text-[22px] lg:text-[26px] leading-[22px] lg:leading-[37px] text-white"> <span className='ps-1'>Phase 3</span> <span className=' block text-[16px] lg:text-[22px] leading-[25px] lg:leading-[31px]'>Q1 - Q2 (2025)</span></h4>
                                        </div>
                                    </div>
                                    <div className=' duration-300 ease-linear hover:shadow-5xl absolute max-md:top-[85px] max-sm:left-[35px] max-md:left-[145px]  !right-0 top-[-67px] max-w-[290px] lg:max-w-[382px] p-5 lg:p-[29px] w-full rounded-[10px] border-[2px] shadow-4xl border-[#FFFFFF29] flex flex-col gap-2 lg:gap-3'>
                                        <h3 className=' text-white font-Dela font-normal text-[20px] lg:text-[26px] leading-[22px] lg:leading-[37px] '>Galactic Expansion</h3>
                                        <div className=' flex items-center gap-[10px] pt-[3px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Form partnerships.</p>
                                        </div>
                                        <div className=' flex items-center gap-[10px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Grow the community.</p>
                                        </div>
                                        <div className=' flex items-center gap-[10px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Enhance platform features.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative flex !mt-[250px] md:!mt-[150px] lg:!mt-[214px]  justify-between md:justify-normal md:even:flex-row-reverse group is-active">
                                    <div className="flex relative z-30 justify-center w-[50px] lg:w-[75px] h-[50px] lg:h-[75px] border-white border-[3px] border-dashed rounded-full  bg-dark_red max-md:translate-x-[-5px] translate-x-[-25%] lg:translate-x-0     shrink-0 md:order-1   items-center">
                                        <div className=' bg-white w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] rounded-full'></div>
                                        <img className='md:hidden absolute max-sm:left-[20px] min-w-[80px] sm:min-w-[100px] md:min-w-[130px] lg:min-w-[200px]' src={arrowright} alt="right-arrow" />
                                        <img className='max-md:hidden absolute max-sm:left-[20px] min-w-[80px] sm:min-w-[100px] md:min-w-[130px] lg:min-w-[180px] xl:min-w-[200px]' src={arrowleft} alt="left-arrow" />
                                    </div>
                                    <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                                        <div class="flex flex-col max-sm:ps-[50px] ps-[80px] md:ps-[133px]">
                                            <h4 class=" font-Dela font-normal text-[22px] lg:text-[26px] leading-[22px] lg:leading-[37px] text-white"><span className='ps-1'>Phase 4</span> <span className=' block text-[16px] lg:text-[22px] leading-[25px] lg:leading-[31px]'>Q3 - Q4 (2025)</span></h4>
                                        </div>
                                    </div>
                                    <div className=' duration-300 ease-linear hover:shadow-5xl absolute max-md:top-[85px]  max-sm:left-[35px] max-md:left-[145px] left-0 top-[-67px] max-w-[290px] lg:max-w-[382px] p-5 lg:p-[29px] w-full rounded-[10px] border-[2px] shadow-4xl border-[#FFFFFF29] flex flex-col gap-2 lg:gap-3'>
                                        <h3 className=' text-white font-Dela font-normal text-[20px] lg:text-[26px] leading-[22px] lg:leading-[37px] '>Cosmic Domination</h3>
                                        <div className=' flex pt-[3px] items-center gap-[10px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Explore cross-chainmigration.</p>
                                        </div>
                                        <div className=' flex items-center gap-[10px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Focus on global adoption.</p>
                                        </div>
                                        <div className=' flex items-center gap-[10px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Establish a decentralized governance structure.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative flex !mt-[250px] md:!mt-[150px] lg:!mt-[214px]  justify-between md:justify-normal md:even:flex-row-reverse group is-active">
                                    <div className="flex relative z-30 justify-center w-[50px] lg:w-[75px] h-[50px] lg:h-[75px] border-white border-[3px] border-dashed rounded-full  bg-dark_red    shrink-0 md:order-1 max-md:translate-x-[-5px] translate-x-[25%] lg:translate-x-0  items-center">
                                        <div className=' bg-white w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] rounded-full'></div>
                                        <img className=' absolute max-sm:left-[20px] min-w-[80px] sm:min-w-[100px] md:min-w-[130px] lg:min-w-[180px] xl:min-w-[200px]' src={arrowright} alt="right-arrow" />

                                    </div>
                                    <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                                        <div class="flex flex-col md:items-end max-sm:ps-[50px] max-md:ps-[80px] md:pe-[133px]">
                                            <h4 class=" font-Dela font-normal text-[16px] lg:text-[26px] leading-[25px] lg:leading-[37px] text-white"> <span className='ps-1'>Phase 5</span> <span className=' block lg:text-[22px] lg:leading-[31px] '>2026 and Beyond</span></h4>
                                        </div>
                                    </div>
                                    <div className=' duration-300 ease-linear hover:shadow-5xl absolute max-md:top-[85px] max-sm:left-[35px] max-md:left-[145px]  !right-0 top-[-67px] max-w-[290px] lg:max-w-[382px] p-5 lg:p-[29px] w-full rounded-[10px] border-[2px] shadow-4xl border-[#FFFFFF29] flex flex-col gap-2 lg:gap-3'>
                                        <h3 className=' text-white font-Dela font-normal text-[20px] lg:text-[26px] leading-[22px] lg:leading-[37px] '>Beyond theStars</h3>
                                        <div className=' flex items-center gap-[10px] pt-[3px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Form partnerships.</p>
                                        </div>
                                        <div className=' flex items-center gap-[10px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Drive further innovation.</p>
                                        </div>
                                        <div className=' flex items-center gap-[10px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Host a galactic celebration.</p>
                                        </div>
                                        <div className=' flex items-center gap-[10px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Secure TROLLMP's enduring legacy.</p>
                                        </div>
                                        <div className=' flex items-center gap-[10px]'>
                                            <img src={check} alt="chek-icon" />
                                            <p className=' text-white font-Balsamiq font-normal text-[14px] lg:text-xl leading-[20px] lg:leading-6'>Enhance platform features.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                    <img className=' z-10 w-full -mt-1  =' src={bottomlayer} alt="bottom-blue-layer" />
            </section >
        </>
    )
}

export default Roadmap