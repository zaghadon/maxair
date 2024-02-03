import Image from "next/image";

export default function Home() {
  return (
    <div className="page">
      <div className="intro min-h-screen min-w-full">
        <header className="header">
          <div className="menu-group flex justify-between py-[21.5px] px-[100px] min-w-full">
            <div className="menu-left flex items-center justify-start">
              <ul className="menus flex items-center justify-center">
                <li className="menu-item"><a href="/">Product center</a></li>
                <li className="menu-item"><a href="/">Solution</a></li>
                <li className="menu-item"><a href="/">Download center</a></li>
                <li className="menu-item"><a href="/">Blog</a></li>
                <li className="menu-item"><a href="/">Corporation</a></li>
                <li className="menu-item">
                  <a href="/">
                    <svg width="64" height="25" viewBox="0 0 64 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.5L34 12.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M24 6.5L40 6.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M24 18.5L28 18.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </a>
                </li>
              </ul>
              <a href="/" className="logo">
                <svg width="145" height="36" viewBox="0 0 145 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M144.465 11.5029V16.0976H139.474C139.474 16.0976 139.058 16.1211 138.666 16.5132C138.274 16.9052 138.274 17.36 138.274 17.36V31.5479H133.746V17.6619C133.746 17.6619 133.691 15.0274 135.456 13.2671C137.22 11.5029 138.878 11.5029 138.878 11.5029H144.465Z" fill="white" />
                  <path d="M131.584 11.5029H127.079V31.5479H131.584V11.5029Z" fill="white" />
                  <path d="M127.507 4.92383L131.313 10.1575H126.781L122.955 4.92383H127.507Z" fill="white" />
                  <path d="M124.856 16.8072V31.5479H111.605C111.605 31.5479 110.366 31.5479 108.849 30.211C107.332 28.8742 106.846 26.7493 106.846 25.4164C106.846 24.0835 107.269 22.4643 108.72 20.9667C110.17 19.4652 111.876 19.5044 111.876 19.5044H120.383V17.3992C120.383 17.3992 120.332 17.0072 120.061 16.5916C119.787 16.176 119.14 16.0976 119.14 16.0976H107.959V11.5029H119.795C119.795 11.5029 121.822 11.7146 123.3 13.3847C124.778 15.0548 124.848 16.8072 124.848 16.8072H124.856ZM120.336 26.7454V24.8558C120.336 24.8558 120.285 24.3069 119.818 23.8208C119.352 23.3386 118.772 23.2759 118.772 23.2759H112.871C112.871 23.2759 111.374 23.5777 111.374 25.0361C111.374 26.4945 112.813 26.7454 112.813 26.7454H120.34H120.336Z" fill="white" />
                  <path d="M106.576 11.5029L100.448 21.5078L106.576 31.5479H100.813L97.5237 25.73L94.3364 31.5479H88.5303L94.6775 21.5078L88.5303 11.5029H94.3364L97.5237 17.3365L100.813 11.5029H106.576Z" fill="white" />
                  <path d="M86.9967 16.8072V31.5479H73.7457C73.7457 31.5479 72.5069 31.5479 70.9897 30.211C69.4725 28.8742 68.9863 26.7493 68.9863 25.4164C68.9863 24.0835 69.4097 22.4643 70.8603 20.9667C72.3108 19.4652 74.0162 19.5044 74.0162 19.5044H82.5235V17.3992C82.5235 17.3992 82.4725 17.0072 82.202 16.5916C81.9276 16.176 81.2807 16.0976 81.2807 16.0976H70.0997V11.5029H81.9354C81.9354 11.5029 83.9623 11.7146 85.4403 13.3847C86.9183 15.0548 86.9888 16.8072 86.9888 16.8072H86.9967ZM82.5274 26.7454V24.8558C82.5274 24.8558 82.4765 24.3069 82.0099 23.8208C81.5434 23.3386 80.9632 23.2759 80.9632 23.2759H75.063C75.063 23.2759 73.5654 23.5777 73.5654 25.0361C73.5654 26.4945 75.0042 26.7454 75.0042 26.7454H82.5313H82.5274Z" fill="white" />
                  <path d="M67.1205 17.3787V31.5469H62.6003V17.6374C62.6003 17.6374 62.5807 17.1121 62.1338 16.6024C61.6869 16.0967 61.2321 16.0967 61.2321 16.0967H58.0958V31.5469H53.552V17.4453C53.552 17.4453 53.501 17.0062 53.1168 16.6142C52.7326 16.2261 52.2151 16.0928 52.2151 16.0928H49.0671V31.543L44.5586 31.5509V31.5391C44.5586 31.0373 44.5704 11.4902 44.5704 11.4902H62.122C62.122 11.4902 63.8117 11.5647 65.4661 13.3524C67.1205 15.144 67.1205 17.3669 67.1205 17.3669V17.3787Z" fill="white" />
                  <path d="M35.5532 18.3593C35.5532 27.1959 28.7552 32.214 28.7552 32.214L28.7474 7.76253C28.7474 7.76253 28.7591 7.41753 28.3985 7.00589C28.0339 6.59425 27.3752 6.63737 27.3752 6.63737L7.832 10.2637C7.832 10.2637 7.6791 10.2912 7.34195 10.5382C7.00479 10.7851 6.90286 11.2713 6.90286 11.2713L6.9107 32.2218C6.9107 32.2218 6.40889 31.7984 5.92276 31.3789C5.43663 30.9595 5.15044 30.6576 5.15044 30.6576C5.15044 30.6576 -0.000976562 26.0041 -0.000976562 18.0104C-0.000976562 10.0167 6.6794 0.498047 17.633 0.498047C28.5866 0.498047 35.5571 9.52278 35.5571 18.3593H35.5532Z" fill="white" />
                  <path d="M23.4158 13.9529V35.072C23.4158 35.072 22.765 35.3778 21.8201 35.5777C20.8753 35.7777 19.7031 35.8718 19.7031 35.8718V13.259C19.7031 13.259 19.7737 13.012 19.9619 12.8512C20.1501 12.6866 20.3304 12.6709 20.3304 12.6709L22.6983 13.0394C22.6983 13.0394 22.9257 13.1178 23.1492 13.3766C23.3765 13.6353 23.4158 13.9529 23.4158 13.9529Z" fill="white" />
                  <path d="M15.9353 12.4506V35.8867C15.9353 35.8867 14.6377 35.7299 13.8849 35.5652C13.1322 35.4006 12.2148 35.0556 12.2148 35.0556L12.2266 11.8822C12.2266 11.8822 12.2423 11.5882 12.4814 11.4C12.7206 11.2118 12.944 11.2353 12.944 11.2353L15.3316 11.6548C15.3316 11.6548 15.555 11.7646 15.6962 11.9567C15.8373 12.1488 15.9353 12.4506 15.9353 12.4506Z" fill="white" />
                </svg>
              </a>
            </div>

            <ul className="menu-right flex items-center justify-end">
              <li className="menu-cta">
                <a href="" className="px-[15px] py-[7.5px] border-[1px] hover:bg-white hover:text-black border-white">Contact Us</a>
              </li>
              <li className="menu-cta">
                <a href="" className="flex gap-1 items-center justify-center px-2.5 py-5">
                  <span>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.00065 15.1663C11.6825 15.1663 14.6673 12.1816 14.6673 8.49967C14.6673 4.81778 11.6825 1.83301 8.00065 1.83301C4.31875 1.83301 1.33398 4.81778 1.33398 8.49967C1.33398 12.1816 4.31875 15.1663 8.00065 15.1663Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M1.33301 8.5H14.6663" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.00065 1.83301C9.66817 3.65858 10.6158 6.0277 10.6673 8.49967C10.6158 10.9717 9.66817 13.3408 8.00065 15.1663C6.33313 13.3408 5.38548 10.9717 5.33398 8.49967C5.38548 6.0277 6.33313 3.65858 8.00065 1.83301Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </span>
                  Language
                </a>
              </li>
            </ul>
          </div>
        </header>
        <section className="banner flex flex-col gap-[40px] items-center justify-center mt-[200px]">
          <h3 className="font-harmos font-thin text-[36px] leading-[42.19px] text-white">
            Professional pneumatic component manufacturer
          </h3>
          <a href="/" className="px-[36px] py-[12px] max-w-[164px] border-[1px] hover:bg-white hover:text-black border-white font-thin text-[14px] text-white">Learn More</a>
        </section>
      </div>
      <main>
        <section>

        </section>
      </main>

      <aside className="cta flex items-center justify-center min-w-full min-h-[540px]">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-harmos font-normal text-[36px]">
              Are you interested in MAXAIR&rsquo;s pneumatic components?
            </h2>
            <p className="text-grey font-harmos font-light text-[20px]">
              We will provide suitable solutions and you can always talk to our product experts
            </p>
          </div>
          <div className="flex gap-4">
            <a href="/" className="px-[36px] py-[12px] max-w-[201px] border-[1px] border-black hover:bg-black hover:text-white font-thin text-[14px] text-black">Sample acquisition</a>
            <a href="/" className="px-[36px] py-[12px] max-w-[152px] border-[1px] bg-[#005FA2] hover:bg-white hover:text-[#005FA2] hover:border-[#005FA2] font-thin text-[14px] text-white">Contact Us</a>
          </div>
        </div>
      </aside>
      <footer className="footer flex flex-col gap-[40px] px-[100px] min-w-full min-h-[432px] bg-[#F2F2F2]">
        <div className="flex justify-between pt-[60px]">
          <div className="flex flex-col gap-6 flex-start">
            <div className="logo">
              <a href="/" className="logo">
                <svg width="208" height="108" viewBox="0 0 208 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_3803_3732)">
                    <path d="M208 15.8633V22.4848H200.814C200.814 22.4848 200.216 22.5186 199.652 23.0836C199.087 23.6486 199.087 24.304 199.087 24.304V44.7503H192.568V24.739C192.568 24.739 192.489 20.9424 195.029 18.4057C197.569 15.8633 199.956 15.8633 199.956 15.8633H208Z" fill="#005FA3" />
                    <path d="M189.451 15.8633H182.966V44.7503H189.451V15.8633Z" fill="#005FA3" />
                    <path d="M183.583 6.38281L189.063 13.9252H182.538L177.029 6.38281H183.583Z" fill="#005FA3" />
                    <path d="M179.766 23.5073V44.7503H160.687C160.687 44.7503 158.904 44.7503 156.719 42.8237C154.535 40.8972 153.835 37.835 153.835 35.9141C153.835 33.9932 154.445 31.6599 156.533 29.5017C158.621 27.3379 161.077 27.3944 161.077 27.3944H173.325V24.3605C173.325 24.3605 173.252 23.7955 172.863 23.1966C172.467 22.5977 171.536 22.4848 171.536 22.4848H155.438V15.8633H172.479C172.479 15.8633 175.397 16.1684 177.525 18.5751C179.653 20.9819 179.755 23.5073 179.755 23.5073H179.766ZM173.258 37.8294V35.1062C173.258 35.1062 173.184 34.3153 172.513 33.6147C171.841 32.9198 171.006 32.8294 171.006 32.8294H162.511C162.511 32.8294 160.354 33.2644 160.354 35.3661C160.354 37.4678 162.426 37.8294 162.426 37.8294H173.263H173.258Z" fill="#005FA3" />
                    <path d="M153.446 15.8633L144.623 30.2814L153.446 44.7503H145.148L140.412 36.3661L135.823 44.7503H127.464L136.314 30.2814L127.464 15.8633H135.823L140.412 24.2701L145.148 15.8633H153.446Z" fill="#005FA3" />
                    <path d="M125.257 23.5073V44.7503H106.179C106.179 44.7503 104.395 44.7503 102.211 42.8237C100.026 40.8972 99.3262 37.835 99.3262 35.9141C99.3262 33.9932 99.9358 31.6599 102.024 29.5017C104.113 27.3379 106.568 27.3944 106.568 27.3944H118.817V24.3605C118.817 24.3605 118.743 23.7955 118.354 23.1966C117.959 22.5977 117.027 22.4848 117.027 22.4848H100.929V15.8633H117.97C117.97 15.8633 120.888 16.1684 123.016 18.5751C125.144 20.9819 125.246 23.5073 125.246 23.5073H125.257ZM118.822 37.8294V35.1062C118.822 35.1062 118.749 34.3153 118.077 33.6147C117.406 32.9198 116.57 32.8294 116.57 32.8294H108.075C108.075 32.8294 105.919 33.2644 105.919 35.3661C105.919 37.4678 107.99 37.8294 107.99 37.8294H118.828H118.822Z" fill="#005FA3" />
                    <path d="M96.6394 24.3296V44.7477H90.1313V24.7025C90.1313 24.7025 90.1031 23.9454 89.4596 23.211C88.8161 22.4822 88.1614 22.4822 88.1614 22.4822H83.6457V44.7477H77.1038V24.4257C77.1038 24.4257 77.0304 23.7929 76.4772 23.2279C75.9241 22.6686 75.179 22.4765 75.179 22.4765H70.6465V44.7421L64.1553 44.7534V44.7364C64.1553 44.0132 64.1722 15.8438 64.1722 15.8438H89.4427C89.4427 15.8438 91.8754 15.9511 94.2574 18.5274C96.6394 21.1093 96.6394 24.3127 96.6394 24.3127V24.3296Z" fill="#005FA3" />
                    <path d="M51.19 25.7421C51.19 38.4765 41.4024 45.7082 41.4024 45.7082L41.3912 10.4709C41.3912 10.4709 41.4081 9.9737 40.8888 9.38048C40.3639 8.78726 39.4156 8.84941 39.4156 8.84941L11.2777 14.0754C11.2777 14.0754 11.0576 14.1149 10.5722 14.4709C10.0867 14.8268 9.93997 15.5274 9.93997 15.5274L9.95126 45.7195C9.95126 45.7195 9.22877 45.1093 8.52885 44.5048C7.82893 43.9003 7.41688 43.4652 7.41688 43.4652C7.41688 43.4652 0 36.759 0 25.2392C0 13.7195 9.61824 0.00195312 25.389 0.00195312C41.1597 0.00195312 51.1957 13.0076 51.1957 25.7421H51.19Z" fill="#005FA3" />
                    <path d="M33.7135 19.3904V49.8255C33.7135 49.8255 32.7765 50.2661 31.4162 50.5543C30.0559 50.8424 28.3682 50.978 28.3682 50.978V18.3904C28.3682 18.3904 28.4698 18.0345 28.7407 17.8029C29.0116 17.5656 29.2713 17.543 29.2713 17.543L32.6806 18.074C32.6806 18.074 33.0079 18.187 33.3297 18.5599C33.6571 18.9328 33.7135 19.3904 33.7135 19.3904Z" fill="#005FA3" />
                    <path d="M22.9436 17.2235V50.9975C22.9436 50.9975 21.0752 50.7715 19.9915 50.5342C18.9077 50.2969 17.5869 49.7997 17.5869 49.7997L17.6038 16.4043C17.6038 16.4043 17.6264 15.9805 17.9707 15.7093C18.3151 15.4382 18.6368 15.4721 18.6368 15.4721L22.0743 16.0766C22.0743 16.0766 22.396 16.2348 22.5992 16.5116C22.8024 16.7884 22.9436 17.2235 22.9436 17.2235Z" fill="#005FA3" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3803_3732">
                      <rect width="208" height="51" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="contact-details">
              <div className="phone flex gap-2 items-center">
                <span>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.666 14.6627H29.3326C29.3326 7.82272 24.1687 2.66406 17.3193 2.66406V5.33072C22.7353 5.33072 26.666 9.25471 26.666 14.6627Z" fill="#005FA2" />
                    <path d="M17.3327 10.6618C20.1367 10.6618 21.3327 11.8578 21.3327 14.6618H23.9994C23.9994 10.3618 21.6327 7.9951 17.3327 7.9951V10.6618ZM21.8954 17.9191C21.6392 17.6862 21.3025 17.562 20.9564 17.5727C20.6104 17.5834 20.282 17.7282 20.0407 17.9764L16.85 21.2577C16.082 21.1111 14.538 20.6297 12.9487 19.0444C11.3594 17.4537 10.8781 15.9058 10.7354 15.1431L14.014 11.9511C14.2626 11.7099 14.4076 11.3815 14.4183 11.0354C14.429 10.6892 14.3046 10.3525 14.0714 10.0964L9.14472 4.67911C8.91144 4.42225 8.58723 4.26645 8.24093 4.24479C7.89463 4.22313 7.55352 4.33732 7.29006 4.56311L4.39673 7.04444C4.16621 7.27579 4.02863 7.5837 4.01007 7.90977C3.99007 8.2431 3.60873 16.1391 9.73139 22.2644C15.0727 27.6044 21.7634 27.9951 23.606 27.9951C23.8754 27.9951 24.0407 27.9871 24.0847 27.9844C24.4107 27.9661 24.7185 27.8279 24.9487 27.5964L27.4287 24.7017C27.6546 24.4384 27.769 24.0974 27.7476 23.7511C27.7262 23.4048 27.5707 23.0805 27.314 22.8471L21.8954 17.9191Z" fill="#005FA2" />
                  </svg>

                </span>
                <p className="text-[#005FA2] text-[20px]"><a href="tel:0755-84565661">0755-84565661</a></p>
              </div>
              <p className="text-[#131313] text-[20px]">Shenzhen Meisel Technology Development Co., LTD</p>
              <ul className="socialgroup flex gap-2">
                <li className="border-1 border-[#005FA2]">
                  <a href="/">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="23" height="23" stroke="#005FA2" />
                      <path d="M18.9803 10.2095C17.6021 10.2095 16.2617 9.80957 15.1591 9.06982V14.2305C15.1591 16.8657 12.8852 19 10.0796 19C7.27399 19 5 16.8657 5 14.2305C5 11.5952 7.27399 9.46094 10.0796 9.46094C10.3601 9.46094 10.6325 9.48291 10.8983 9.52393V12.2573C10.644 12.168 10.3733 12.1226 10.1009 12.1226C8.84906 12.1226 7.83347 13.0747 7.83347 14.251C7.83347 15.4258 8.84906 16.3794 10.1009 16.3794C11.3511 16.3794 12.3667 15.4258 12.3667 14.251V4H15.2002C15.2002 5.97021 16.9016 7.56689 19 7.56689V10.208L18.9803 10.2095Z" fill="#005FA2" />
                    </svg>

                  </a>
                </li>
                <li className="border-1 border-[#005FA2]">
                  <a href="/">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="23" height="23" stroke="#005FA2" />
                      <g clip-path="url(#clip0_3803_3766)">
                        <path d="M16.8578 12.2844C17.1169 12.4859 17.2993 12.7283 17.4049 13.0114C17.5104 13.2946 17.5536 13.5897 17.5344 13.8968C17.5152 14.204 17.4481 14.5111 17.3329 14.8182C17.2177 15.1254 17.0689 15.4037 16.8866 15.6532C16.5603 16.1043 16.1907 16.4883 15.778 16.805C15.3653 17.1217 14.9382 17.3857 14.4967 17.5968C14.0552 17.808 13.6113 17.9735 13.165 18.0935C12.7187 18.2135 12.2988 18.3023 11.9053 18.3599C11.5118 18.4174 11.1591 18.4534 10.8471 18.4678C10.5352 18.4822 10.2929 18.4894 10.1201 18.4894C9.94733 18.4894 9.71698 18.4774 9.42904 18.4534C9.14111 18.4294 8.82198 18.3815 8.47166 18.3095C8.12133 18.2375 7.75422 18.1367 7.3703 18.0071C6.98639 17.8776 6.61207 17.7072 6.24735 17.496C5.88263 17.2849 5.53471 17.0257 5.20358 16.7186C4.87246 16.4115 4.59172 16.042 4.36137 15.6101C4.2078 15.3317 4.10463 15.0342 4.05184 14.7174C3.99905 14.4007 3.97266 13.9976 3.97266 13.5081C3.97266 13.297 4.00865 13.057 4.08063 12.7883C4.15262 12.5195 4.27979 12.222 4.46215 11.8957C4.64451 11.5693 4.89405 11.2142 5.21078 10.8303C5.52751 10.4464 5.93062 10.0241 6.42011 9.56337C6.90001 9.11226 7.3967 8.71155 7.91018 8.36123C8.42367 8.0109 8.97315 7.73976 9.55862 7.5478C9.82736 7.45182 10.1249 7.39904 10.4512 7.38944C10.7775 7.37984 11.0463 7.43263 11.2574 7.5478C11.3534 7.65338 11.4446 7.76136 11.531 7.87173C11.6174 7.98211 11.6749 8.11888 11.7037 8.28204C11.7325 8.41641 11.7349 8.54599 11.7109 8.67076C11.6869 8.79553 11.6605 8.92031 11.6318 9.04508C11.603 9.16985 11.579 9.28982 11.5598 9.405C11.5406 9.52017 11.5502 9.62575 11.5886 9.72173C11.7517 9.74093 11.9101 9.73373 12.0637 9.70014C12.2172 9.66654 12.366 9.62335 12.51 9.57056C12.6539 9.51778 12.8003 9.46259 12.9491 9.405C13.0978 9.34741 13.2538 9.30422 13.417 9.27543C13.6761 9.22744 13.9328 9.20584 14.1872 9.21064C14.4415 9.21544 14.6719 9.25143 14.8782 9.31862C15.0846 9.3858 15.2549 9.48898 15.3893 9.62815C15.5237 9.76732 15.6053 9.94728 15.6341 10.168C15.6533 10.3024 15.6437 10.4272 15.6053 10.5424C15.5669 10.6575 15.5261 10.7655 15.4829 10.8663C15.4397 10.9671 15.4061 11.0702 15.3821 11.1758C15.3581 11.2814 15.3653 11.3918 15.4037 11.5069C15.4325 11.5741 15.5021 11.6365 15.6125 11.6941C15.7228 11.7517 15.85 11.8093 15.994 11.8669C16.138 11.9245 16.2891 11.9868 16.4475 12.054C16.6058 12.1212 16.7426 12.198 16.8578 12.2844ZM13.2298 16.7618C13.4793 16.6082 13.7313 16.3971 13.9856 16.1283C14.24 15.8596 14.4463 15.5597 14.6047 15.2285C14.7631 14.8974 14.8518 14.5423 14.871 14.1632C14.8902 13.784 14.7943 13.4025 14.5831 13.0186C14.4007 12.7019 14.1776 12.4331 13.9136 12.2124C13.6497 11.9916 13.3546 11.8165 13.0282 11.6869C12.7019 11.5573 12.354 11.4638 11.9845 11.4062C11.615 11.3486 11.2382 11.3198 10.8543 11.3198C10.1153 11.3198 9.46024 11.3966 8.88916 11.5501C8.31809 11.7037 7.8238 11.9053 7.40629 12.1548C6.98879 12.4043 6.65046 12.6875 6.39132 13.0042C6.13218 13.321 5.94982 13.6425 5.84424 13.9688C5.73866 14.2855 5.70747 14.5999 5.75066 14.9118C5.79385 15.2237 5.89223 15.5189 6.0458 15.7972C6.19936 16.0756 6.39852 16.3251 6.64326 16.5459C6.88801 16.7666 7.15915 16.9442 7.45668 17.0785C8.00376 17.3185 8.56284 17.4697 9.13391 17.532C9.70498 17.5944 10.2497 17.5968 10.7679 17.5392C11.2862 17.4816 11.7589 17.3809 12.186 17.2369C12.6131 17.0929 12.9611 16.9346 13.2298 16.7618ZM11.3438 12.2124C11.5358 12.2892 11.7181 12.3756 11.8909 12.4715C12.0637 12.5675 12.2172 12.6971 12.3516 12.8603C12.4476 12.9754 12.5316 13.1194 12.6035 13.2922C12.6755 13.4649 12.7259 13.6497 12.7547 13.8464C12.7835 14.0432 12.7907 14.2424 12.7763 14.4439C12.7619 14.6455 12.7163 14.8278 12.6395 14.991C12.5627 15.1638 12.4692 15.3389 12.3588 15.5165C12.2484 15.694 12.114 15.8596 11.9557 16.0132C11.7973 16.1667 11.6078 16.3035 11.387 16.4235C11.1663 16.5435 10.8975 16.6322 10.5808 16.6898C10.0049 16.7954 9.45304 16.7426 8.92516 16.5315C8.39727 16.3203 7.98457 15.97 7.68703 15.4805C7.57186 15.1062 7.50947 14.775 7.49987 14.4871C7.49027 14.1992 7.56706 13.8872 7.73022 13.5513C7.85499 13.2922 8.04455 13.0498 8.29889 12.8243C8.55324 12.5987 8.84597 12.4163 9.1771 12.2772C9.50823 12.138 9.86095 12.0564 10.2353 12.0324C10.6096 12.0084 10.9791 12.0684 11.3438 12.2124ZM9.05473 15.754C9.40985 15.7828 9.68099 15.6964 9.86815 15.4949C10.0553 15.2933 10.1561 15.0678 10.1705 14.8182C10.1849 14.5687 10.1129 14.3455 9.95453 14.1488C9.79616 13.952 9.54902 13.8728 9.21309 13.9112C8.95395 13.94 8.75239 14.0504 8.60843 14.2424C8.46446 14.4343 8.38288 14.6383 8.36368 14.8542C8.34448 15.0702 8.39007 15.2693 8.50045 15.4517C8.61083 15.634 8.79558 15.7348 9.05473 15.754ZM14.943 5.08594C15.6437 5.08594 16.2987 5.17952 16.9082 5.36668C17.5176 5.55384 18.0503 5.82498 18.5062 6.1801C18.9621 6.53522 19.3196 6.96713 19.5788 7.47582C19.8379 7.98451 19.9675 8.56038 19.9675 9.20344C19.9675 9.52017 19.8907 9.75772 19.7372 9.91609C19.5836 10.0745 19.418 10.156 19.2405 10.1608C19.0629 10.1656 18.8973 10.0984 18.7438 9.95928C18.5902 9.82011 18.5134 9.60656 18.5134 9.31862C18.5134 8.9347 18.4078 8.56998 18.1967 8.22446C17.9855 7.87893 17.7072 7.5766 17.3617 7.31745C17.0162 7.05831 16.6202 6.85435 16.1739 6.70559C15.7276 6.55682 15.2741 6.48243 14.8134 6.48243C14.5159 6.48243 14.2952 6.41045 14.1512 6.26648C14.0072 6.12251 13.94 5.96175 13.9496 5.78419C13.9592 5.60662 14.048 5.44586 14.216 5.30189C14.3839 5.15792 14.6263 5.08594 14.943 5.08594ZM14.943 7.38944C15.8356 7.38944 16.5123 7.61739 16.973 8.07329C17.4337 8.52919 17.664 9.21784 17.664 10.1392C17.664 10.4272 17.616 10.6311 17.52 10.7511C17.4241 10.8711 17.3185 10.9239 17.2033 10.9095C17.0881 10.8951 16.9826 10.8255 16.8866 10.7007C16.7906 10.5759 16.7426 10.408 16.7426 10.1968C16.7426 9.63055 16.5795 9.17945 16.2531 8.84352C15.9268 8.50759 15.4901 8.33963 14.943 8.33963C14.7607 8.33963 14.6263 8.28924 14.5399 8.18846C14.4535 8.08769 14.4103 7.97971 14.4103 7.86453C14.4103 7.74936 14.4559 7.64138 14.5471 7.5406C14.6383 7.43983 14.7703 7.38944 14.943 7.38944Z" fill="#005FA2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_3803_3766">
                          <rect width="16" height="14.3969" fill="white" transform="translate(4 5)" />
                        </clipPath>
                      </defs>
                    </svg>

                  </a>
                </li>
                <li className="border-1 border-[#005FA2]">
                  <a href="/">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.650391" width="23" height="23" stroke="#005FA2" />
                      <path d="M14.3787 9.9087C14.5352 9.9087 14.6895 9.92015 14.8424 9.93676C14.426 8.01785 12.3524 6.5918 9.98572 6.5918C7.33957 6.5918 5.17188 8.37668 5.17188 10.643C5.17188 11.9509 5.89321 13.0251 7.09815 13.8583L6.61677 15.2916L8.2994 14.4564C8.90187 14.5741 9.38472 14.6956 9.98572 14.6956C10.1367 14.6956 10.2862 14.6882 10.435 14.6764C10.3408 14.3582 10.2862 14.0245 10.2862 13.6786C10.2862 11.5976 12.0921 9.9087 14.3787 9.9087ZM11.7909 8.61702C12.1534 8.61702 12.3934 8.85327 12.3934 9.21173C12.3934 9.56871 12.1534 9.80792 11.7909 9.80792C11.4299 9.80792 11.0681 9.56871 11.0681 9.21173C11.0681 8.85327 11.4299 8.61702 11.7909 8.61702ZM8.42196 9.8079C8.06091 9.8079 7.69692 9.56869 7.69692 9.21172C7.69692 8.85326 8.06091 8.617 8.42196 8.617C8.78261 8.617 9.02294 8.85326 9.02294 9.21172C9.02294 9.56871 8.78261 9.8079 8.42196 9.8079ZM18.7725 13.6214C18.7725 11.7168 16.8466 10.1645 14.6837 10.1645C12.3934 10.1645 10.5897 11.7168 10.5897 13.6214C10.5897 15.5286 12.3934 17.0776 14.6837 17.0776C15.1628 17.0776 15.6464 16.9587 16.1278 16.8391L17.4483 17.5546L17.0861 16.3644C18.0526 15.6467 18.7725 14.6956 18.7725 13.6214ZM13.3561 13.0251C13.1166 13.0251 12.8748 12.7893 12.8748 12.5486C12.8748 12.3112 13.1166 12.0724 13.3561 12.0724C13.7201 12.0724 13.9586 12.3112 13.9586 12.5486C13.9586 12.7893 13.7201 13.0251 13.3561 13.0251ZM16.0037 13.0251C15.766 13.0251 15.5257 12.7893 15.5257 12.5486C15.5257 12.3112 15.766 12.0724 16.0037 12.0724C16.3648 12.0724 16.6062 12.3112 16.6062 12.5486C16.6062 12.7893 16.3648 13.0251 16.0037 13.0251Z" fill="#005FA2" />
                    </svg>

                  </a>
                </li>
                <li className="border-1 border-[#005FA2]">
                  <a href="/">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="23" height="23" stroke="#005FA2" />
                      <path d="M14.6112 10.2339V5.97634C14.6112 5.97634 12.5278 4.85945 10.0957 5.72063L14.6112 10.2339ZM15.0056 12.7387V6.15214C15.0056 6.15214 17.4686 7.2683 18.1627 9.97969L15.0056 12.7387ZM13.6806 14.6531L18.2273 10.3774C18.2273 10.3774 19.0318 11.6853 17.8321 14.6531H13.6806ZM11.359 15.1952H17.4998C17.4998 15.1952 16.7585 17.2045 14.1052 18.0341L11.359 15.1952ZM9.35439 13.8388V17.8416C9.35439 17.8416 10.9493 18.863 13.6806 18.1772L9.35439 13.8388ZM5.80179 14.0459L8.91233 11.2549V17.6019C8.91233 17.6019 7.03308 16.9496 5.80179 14.0459ZM5.72296 13.5995C5.72296 13.5995 5.01143 11.3036 6.00662 9.30956H10.2849L5.72296 13.5995ZM6.27542 8.86207C6.27542 8.86207 7.17546 6.82153 9.62245 5.8641L12.5427 8.86207H6.27542Z" fill="#005FA2" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-end flex gap-[41.5px]">
            <div className="footer-menu-list-box flex flex-col gap-6">
              <h6 className="ftm-box-title text-xl">Product center</h6>
              <ul className="ftm-list">
                <li className="flex gap-0.5 items-center">
                  <a href="/">
                    Solenoid valve
                  </a>
                  <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#B8B8B8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </span>
                </li>
                <li className="flex gap-0.5">
                  <a href="/">
                  Pendulum cylinder
                  </a>
                  <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#B8B8B8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </span>
                </li>
                <li className="flex gap-0.5">
                  <a href="/">
                  Contact us
                  </a>
                  <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#B8B8B8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </span>
                </li>
                <li className="flex gap-0.5">
                  <a href="/">
                  Contact us
                  </a>
                  <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#B8B8B8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </span>
                </li>
              </ul>
            </div>
            <div className="footer-menu-list-box flex flex-col gap-6">
              <h6 className="ftm-box-title text-xl">Industry solutions</h6>
              <ul className="ftm-list">
                <li className="flex gap-0.5 items-center">
                  <a href="/">
                  Electronics industry
                  </a>
                  <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#B8B8B8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </span>
                </li>
                <li className="flex gap-0.5">
                  <a href="/">
                  Solar power
                  </a>
                  <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#B8B8B8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </span>
                </li>
                <li className="flex gap-0.5">
                  <a href="/">
                  Lithium battery
                  </a>
                  <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#B8B8B8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </span>
                </li>
                <li className="flex gap-0.5">
                  <a href="/">
                  New energy
                  </a>
                  <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#B8B8B8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </span>
                </li>
              </ul>
            </div>
            <div className="footer-menu-list-box flex flex-col gap-6">
              <h6 className="ftm-box-title text-xl">About Us</h6>
              <ul className="ftm-list">
                <li className="flex gap-0.5 items-center">
                  <a href="/">
                    About us
                  </a>
                  <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#B8B8B8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </span>
                </li>
                <li className="flex gap-0.5">
                  <a href="/">
                  News center
                  </a>
                  <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#B8B8B8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </span>
                </li>
                <li className="flex gap-0.5">
                  <a href="/">
                  Attract investment
                  </a>
                  <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#B8B8B8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </span>
                </li>
                <li className="flex gap-0.5">
                  <a href="/">
                  Talent recruitment
                  </a>
                  <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#B8B8B8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-t-[#666666] pb-[20px]">
          <div className="flex justify-between items-center py-4">
            <div className="footer-legals flex flex-start font-harmos text-[12px] leading-[14.06px] text-[#666666] font">
              <p>Copyright © 2023 Meisel | Guangdong ICP No. 2022095356</p>
              <p><a href="/">Legal Statement</a></p>
            </div>
            <div className="flex flex-end">
            <a href="/" className="px-[36px] py-[12px] max-w-[152px] border-[1px] bg-white hover:bg-[#005FA2] hover:text-white border-[#005FA2] font-thin text-[14px] text-[#005FA2]">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
      <div className="back-to-top fixed right-[100px] bottom-3 w-16 h-16 bg-[#005FA2E5] text-white flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-110">
        <div className="flex flex-col items-center justify-center">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.99805 4.49805H20.998V2.99805H2.99805V4.49805Z" fill="white" fill-opacity="0.9" />
              <path d="M5.06485 15.3436L11.2295 9.29285L11.2295 22.2654L12.7458 22.2652L12.7457 9.28485L19.0163 15.4004L20.0868 14.3497L12.3361 6.79059C12.1415 6.60076 11.8308 6.60125 11.6368 6.79171L3.99101 14.2963L5.06485 15.3436Z" fill="white" fill-opacity="0.9" />
            </svg>
            <p>TOP</p>
          </span>
        </div>
      </div>
    </div>
  );
}
