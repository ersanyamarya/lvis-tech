import React from 'react'
import tw, { styled } from 'twin.macro'
import colors from '../colors'

const Mission = styled.div`
  ${tw`p-16 lg:w-2/5 flex flex-col items-center mx-4 lg:m-0 text-center`}
  color:${colors.accent};
  background-color: ${colors.primaryLight};
`

const Vision = styled.div`
  ${tw`p-16 lg:w-2/5 flex flex-col items-center mx-4 lg:m-0 text-center `}
  color:${colors.baseLight};
  background-color: ${colors.accent};
`

export default function MissionVison(): JSX.Element {
  return (
    <div tw="py-32 flex justify-center flex-col lg:flex-row">
      {/* <HeroImage fluid={heroImage.fluid} /> */}

      <Vision>
        <h2 tw="text-4xl pb-3 mb-2 border-b-4">Our Vision</h2>
        <svg width="145" height="155" viewBox="0 0 145 155" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="2.00024"
            y="11.729"
            width="141.071"
            height="141.071"
            rx="13.7166"
            fill="white"
            stroke="#603973"
            strokeWidth="3.42914"
          />
          <rect
            x="2.00024"
            y="2"
            width="141.071"
            height="141.071"
            rx="13.7166"
            fill="#F6F1FD"
            stroke="#603973"
            strokeWidth="3.42914"
          />
          <rect
            x="43.8352"
            y="43.8348"
            width="57.4013"
            height="57.4013"
            rx="8.57286"
            fill="#FFF4A4"
            stroke="#603973"
            strokeWidth="3.42914"
          />
          <rect x="63.2932" y="63.2928" width="18.4852" height="18.4852" rx="1.71457" fill="#603973" />
          <path
            d="M37.0247 59.4012H43.835"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.0247 68.1573H43.835"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.0247 76.9135H43.835"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.0247 85.6696H43.835"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M101.236 59.4012H108.047"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M101.236 68.1573H108.047"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M101.236 76.9135H108.047"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M101.236 85.6696H108.047"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M59.4014 108.046L59.4014 101.236"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M68.1575 108.046L68.1575 101.236"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M76.9136 108.046L76.9136 101.236"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M85.6697 108.046L85.6697 101.236"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M59.4014 43.8348L59.4014 37.0245"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M68.1575 43.8348L68.1575 37.0245"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M76.9136 43.8348L76.9136 37.0245"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M85.6697 43.8348L85.6697 37.0245"
            stroke="#603973"
            strokeWidth="3.42914"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="54.5371" cy="55.5096" r="1.94581" fill="#603973" />
          <circle cx="54.5371" cy="91.5071" r="1.94581" fill="#603973" />
          <circle cx="90.5344" cy="55.5096" r="1.94581" fill="#603973" />
          <circle cx="90.5344" cy="91.5071" r="1.94581" fill="#603973" />
        </svg>
        <p tw="mt-16 text-xl">
          To build solutions that will accelerate enterprise cloud journey by developing deep partnering with products &
          service providers. Be at the front end of disruption & transformation across industry verticals.
        </p>
      </Vision>
      <Mission>
        <h2 tw="text-4xl pb-3 mb-2 border-b-4" style={{ borderColor: colors.accent }}>
          Our Mission
        </h2>
        <svg width="205" height="137" viewBox="0 0 205 137" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="16.3076"
            y="2.10645"
            width="186.894"
            height="132.346"
            rx="13.7166"
            fill="white"
            stroke="#603973"
            strokeWidth="3.42914"
          />
          <rect
            x="2"
            y="2.10645"
            width="186.894"
            height="132.346"
            rx="13.7166"
            fill="white"
            stroke="#603973"
            strokeWidth="3.42914"
          />
          <rect
            x="13.625"
            y="13.7314"
            width="163.644"
            height="109.096"
            rx="10.2874"
            fill="#E8DBFB"
            stroke="#603973"
            strokeWidth="3.42914"
          />
          <rect
            x="13.625"
            y="13.7314"
            width="126.98"
            height="84.0574"
            rx="10.2874"
            fill="#FFF4A4"
            stroke="#603973"
            strokeWidth="3.42914"
          />
          <path
            d="M120.063 42.0603C120.17 41.2022 120.9 40.5583 121.764 40.5583H133.045C133.91 40.5583 134.639 41.2022 134.746 42.0603L137 60.0926C137.128 61.1159 136.33 62.0198 135.299 62.0198H119.51C118.479 62.0198 117.681 61.1159 117.809 60.0926L120.063 42.0603Z"
            stroke="#603973"
            strokeWidth="3.42914"
          />
          <path
            d="M119.197 121.289C119.288 122.163 120.024 122.827 120.903 122.827L132.118 122.827C132.996 122.827 133.733 122.163 133.823 121.289L136.151 98.7855C136.256 97.7742 135.462 96.8945 134.446 96.8945L118.575 96.8945C117.558 96.8945 116.765 97.7742 116.869 98.7855L119.197 121.289Z"
            stroke="#603973"
            strokeWidth="3.42914"
          />
          <path
            d="M158.813 58.3883C159.606 58.0684 160.513 58.3809 160.94 59.121L166.604 68.9309C167.031 69.671 166.848 70.6127 166.175 71.139L153.746 80.8549C152.925 81.4967 151.726 81.2638 151.205 80.3614L143.342 66.7413C142.821 65.8388 143.218 64.6842 144.185 64.2941L158.813 58.3883Z"
            stroke="#603973"
            strokeWidth="3.42914"
          />
          <path
            d="M86.3772 68.6091C85.6914 68.0862 85.5007 67.1352 85.9319 66.3883L91.5774 56.61C92.0086 55.8631 92.9275 55.5528 93.7233 55.8853L109.953 62.6668C110.907 63.0654 111.294 64.2109 110.777 65.1061L102.89 78.7677C102.373 79.6629 101.187 79.9006 100.365 79.2739L86.3772 68.6091Z"
            stroke="#603973"
            strokeWidth="3.42914"
          />
          <path
            d="M164.373 93.4151C165.053 93.9395 165.24 94.8864 164.811 95.6304L159.157 105.422C158.728 106.166 157.814 106.478 157.02 106.151L141.523 99.7712C140.564 99.3763 140.172 98.2268 140.691 97.3284L148.568 83.6849C149.087 82.7865 150.278 82.5509 151.099 83.1842L164.373 93.4151Z"
            stroke="#603973"
            strokeWidth="3.42914"
          />
          <path
            d="M93.7523 105.66C92.9579 105.988 92.0439 105.676 91.6144 104.932L85.9612 95.1409C85.5317 94.3969 85.7191 93.4498 86.3997 92.9254L99.7038 82.6757C100.525 82.0428 101.716 82.2785 102.235 83.1767L110.113 96.8211C110.631 97.7193 110.24 98.8686 109.281 99.2637L93.7523 105.66Z"
            stroke="#603973"
            strokeWidth="3.42914"
          />
          <circle cx="127.639" cy="83.0342" r="33.5336" fill="#603973" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M116.98 43.562C117.194 41.846 118.653 40.5582 120.383 40.5582H128.636C130.365 40.5582 131.824 41.846 132.039 43.562L133.1 52.0528C138.684 53.329 143.682 56.1428 147.626 60.0249L155.973 56.6562C157.557 56.0165 159.371 56.6415 160.226 58.1215L164.4 65.3511C165.254 66.8311 164.889 68.7145 163.542 69.7671L156.09 75.5942C156.491 77.5644 156.701 79.604 156.701 81.6927C156.701 85.0436 156.159 88.268 155.158 91.2827L162.503 96.912C163.186 97.4357 163.375 98.3847 162.945 99.1302L157.296 108.915C156.865 109.661 155.949 109.971 155.154 109.641L145.197 105.51C141.486 108.459 137.071 110.558 132.244 111.515L131.158 119.842C130.936 121.55 129.48 122.827 127.758 122.827H119.472C117.75 122.827 116.295 121.55 116.072 119.842L114.766 109.834C111.265 108.397 108.09 106.326 105.386 103.763L96.544 107.409C94.955 108.064 93.1264 107.442 92.2671 105.954L88.1157 98.7631C87.2563 97.2746 87.6316 95.3798 88.9935 94.3313L96.6453 88.4403C96.1535 86.2701 95.8939 84.0117 95.8939 81.6927C95.8939 80.9002 95.9242 80.1148 95.9837 79.3376L86.0359 71.7637C84.6629 70.7183 84.2806 68.8153 85.1435 67.3208L89.2786 60.1586C90.1415 58.664 91.9806 58.0436 93.5725 58.71L102.693 62.5281C106.105 58.3316 110.613 55.0624 115.781 53.1571L116.98 43.562Z"
            fill="#E8DBFB"
          />
          <path
            d="M116.98 43.562L118.681 43.7747L118.681 43.7747L116.98 43.562ZM132.039 43.562L130.337 43.7747V43.7747L132.039 43.562ZM133.1 52.0528L131.399 52.2655L131.547 53.4568L132.718 53.7243L133.1 52.0528ZM147.626 60.0249L146.423 61.2468L147.225 62.0358L148.268 61.6149L147.626 60.0249ZM155.973 56.6562L156.614 58.2461L155.973 56.6562ZM160.226 58.1215L161.711 57.2642V57.2642L160.226 58.1215ZM164.4 65.3511L165.885 64.4938V64.4938L164.4 65.3511ZM163.542 69.7671L164.598 71.1178L163.542 69.7671ZM156.09 75.5942L155.033 74.2435L154.198 74.8968L154.409 75.9363L156.09 75.5942ZM155.158 91.2827L153.531 90.7423L153.146 91.901L154.115 92.6436L155.158 91.2827ZM162.503 96.912L163.546 95.5512V95.5512L162.503 96.912ZM162.945 99.1302L164.43 99.9875V99.9875L162.945 99.1302ZM157.296 108.915L158.78 109.772L158.78 109.772L157.296 108.915ZM155.154 109.641L155.811 108.058H155.811L155.154 109.641ZM145.197 105.51L145.854 103.927L144.921 103.54L144.13 104.168L145.197 105.51ZM132.244 111.515L131.911 109.833L130.703 110.073L130.544 111.293L132.244 111.515ZM131.158 119.842L129.458 119.62L131.158 119.842ZM116.072 119.842L114.372 120.063L116.072 119.842ZM114.766 109.834L116.467 109.612L116.338 108.625L115.417 108.247L114.766 109.834ZM105.386 103.763L106.566 102.519L105.76 101.755L104.733 102.178L105.386 103.763ZM96.544 107.409L95.8904 105.824L96.544 107.409ZM92.2671 105.954L90.7822 106.811H90.7822L92.2671 105.954ZM88.1157 98.7631L86.6308 99.6204L88.1157 98.7631ZM88.9935 94.3313L87.9475 92.9728H87.9475L88.9935 94.3313ZM96.6453 88.4403L97.6912 89.7989L98.5597 89.1303L98.3174 88.0614L96.6453 88.4403ZM95.9837 79.3376L97.6933 79.4686L97.7645 78.5385L97.0224 77.9735L95.9837 79.3376ZM86.0359 71.7637L84.9973 73.1279H84.9973L86.0359 71.7637ZM85.1435 67.3208L83.6586 66.4635L85.1435 67.3208ZM89.2786 60.1586L87.7938 59.3013V59.3013L89.2786 60.1586ZM93.5725 58.71L92.9104 60.2916L93.5725 58.71ZM102.693 62.5281L102.031 64.1097L103.214 64.6051L104.024 63.6097L102.693 62.5281ZM115.781 53.1571L116.374 54.7658L117.352 54.4049L117.482 53.3697L115.781 53.1571ZM120.383 38.8437C117.789 38.8437 115.6 40.7753 115.279 43.3494L118.681 43.7747C118.789 42.9167 119.518 42.2728 120.383 42.2728V38.8437ZM128.636 38.8437H120.383V42.2728H128.636V38.8437ZM133.74 43.3494C133.418 40.7753 131.23 38.8437 128.636 38.8437V42.2728C129.501 42.2728 130.23 42.9167 130.337 43.7747L133.74 43.3494ZM134.801 51.8401L133.74 43.3494L130.337 43.7747L131.399 52.2655L134.801 51.8401ZM132.718 53.7243C137.984 54.9278 142.7 57.5817 146.423 61.2468L148.829 58.803C144.665 54.7038 139.384 51.7303 133.482 50.3813L132.718 53.7243ZM148.268 61.6149L156.614 58.2461L155.331 55.0662L146.984 58.4349L148.268 61.6149ZM156.614 58.2461C157.407 57.9263 158.314 58.2388 158.741 58.9788L161.711 57.2642C160.429 55.0442 157.708 54.1068 155.331 55.0662L156.614 58.2461ZM158.741 58.9788L162.915 66.2084L165.885 64.4938L161.711 57.2642L158.741 58.9788ZM162.915 66.2084C163.342 66.9484 163.159 67.8901 162.486 68.4164L164.598 71.1178C166.618 69.5388 167.166 66.7139 165.885 64.4938L162.915 66.2084ZM162.486 68.4164L155.033 74.2435L157.146 76.9449L164.598 71.1178L162.486 68.4164ZM154.409 75.9363C154.788 77.7946 154.987 79.7195 154.987 81.6927H158.416C158.416 79.4884 158.194 77.3343 157.77 75.2521L154.409 75.9363ZM154.987 81.6927C154.987 84.8577 154.475 87.8996 153.531 90.7423L156.785 91.8232C157.844 88.6363 158.416 85.2296 158.416 81.6927H154.987ZM154.115 92.6436L161.46 98.2729L163.546 95.5512L156.201 89.9219L154.115 92.6436ZM161.46 98.2729V98.2729L164.43 99.9875C165.291 98.4965 164.912 96.5984 163.546 95.5512L161.46 98.2729ZM161.46 98.2729L155.811 108.058L158.78 109.772L164.43 99.9875L161.46 98.2729ZM155.811 108.058L154.497 111.225C156.087 111.885 157.92 111.263 158.78 109.772L155.811 108.058ZM155.811 108.058L145.854 103.927L144.54 107.094L154.497 111.225L155.811 108.058ZM144.13 104.168C140.628 106.951 136.463 108.931 131.911 109.833L132.578 113.197C137.679 112.185 142.345 109.967 146.263 106.853L144.13 104.168ZM130.544 111.293L129.458 119.62L132.859 120.063L133.945 111.737L130.544 111.293ZM129.458 119.62C129.347 120.474 128.619 121.113 127.758 121.113V124.542C130.342 124.542 132.524 122.625 132.859 120.063L129.458 119.62ZM127.758 121.113H119.472V124.542H127.758V121.113ZM119.472 121.113C118.611 121.113 117.883 120.474 117.772 119.62L114.372 120.063C114.706 122.625 116.889 124.542 119.472 124.542V121.113ZM117.772 119.62L116.467 109.612L113.066 110.055L114.372 120.063L117.772 119.62ZM115.417 108.247C112.114 106.892 109.118 104.938 106.566 102.519L104.207 105.008C107.062 107.714 110.415 109.902 114.116 111.42L115.417 108.247ZM97.1976 108.994L106.04 105.348L104.733 102.178L95.8904 105.824L97.1976 108.994ZM90.7822 106.811C92.0713 109.044 94.8141 109.977 97.1976 108.994L95.8904 105.824C95.0959 106.152 94.1816 105.84 93.7519 105.096L90.7822 106.811ZM86.6308 99.6204L90.7822 106.811L93.7519 105.096L89.6005 97.9058L86.6308 99.6204ZM87.9475 92.9728C85.9047 94.5455 85.3417 97.3876 86.6308 99.6204L89.6005 97.9058C89.1708 97.1615 89.3585 96.2142 90.0394 95.6899L87.9475 92.9728ZM95.5993 87.0817L87.9475 92.9728L90.0394 95.6899L97.6912 89.7989L95.5993 87.0817ZM98.3174 88.0614C97.8536 86.0146 97.6084 83.8834 97.6084 81.6927H94.1793C94.1793 84.1401 94.4533 86.5255 94.9731 88.8192L98.3174 88.0614ZM97.6084 81.6927C97.6084 80.944 97.6371 80.2023 97.6933 79.4686L94.2742 79.2067C94.2113 80.0274 94.1793 80.8565 94.1793 81.6927H97.6084ZM84.9973 73.1279L94.9451 80.7018L97.0224 77.9735L87.0746 70.3995L84.9973 73.1279ZM83.6586 66.4635C82.3643 68.7053 82.9377 71.5598 84.9973 73.1279L87.0746 70.3995C86.3881 69.8768 86.1969 68.9254 86.6284 68.1781L83.6586 66.4635ZM87.7938 59.3013L83.6586 66.4635L86.6284 68.1781L90.7635 61.0158L87.7938 59.3013ZM94.2346 57.1284C91.8468 56.1288 89.0881 57.0594 87.7938 59.3013L90.7635 61.0158C91.1949 60.2686 92.1145 59.9583 92.9104 60.2916L94.2346 57.1284ZM103.355 60.9466L94.2346 57.1284L92.9104 60.2916L102.031 64.1097L103.355 60.9466ZM104.024 63.6097C107.244 59.6477 111.499 56.5629 116.374 54.7658L115.187 51.5484C109.726 53.5619 104.965 57.0156 101.363 61.4466L104.024 63.6097ZM115.279 43.3494L114.079 52.9444L117.482 53.3697L118.681 43.7747L115.279 43.3494Z"
            fill="#603973"
          />
          <circle cx="122.274" cy="81.2457" r="11.1779" fill="#603973" />
        </svg>

        <p tw="mt-16 text-xl">
          To be the goto firm that delivers top of the line engineering results & business outcomes on modern disruptive
          technologies and platforms for customers globally.
        </p>
      </Mission>
    </div>
  )
}
