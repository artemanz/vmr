import React from "react";
import c from "./style.module.scss";

type Props = {};

const Logo = (props: Props) => {
  return (
    <svg
      className={c.logo}
      width="221"
      height="240"
      viewBox="0 0 221 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={c.circle}
        cx="91"
        cy="110"
        r="35"
        fill="url(#paint0_linear_401_75)"
      />
      <circle
        className={c.circle}
        cx="91"
        cy="110"
        r="29"
        stroke="white"
        strokeWidth="4"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.6671 239.15C56.407 239.15 64.4361 237.11 72.2061 232.62L196.441 160.77C204.031 156.38 209.845 150.34 213.816 143.46C218.066 136.1 220.225 127.75 220.245 119.41C220.265 111.07 218.158 102.71 213.878 95.31C209.918 88.46 204.088 82.42 196.378 77.97L72.6436 6.55C64.8836 2.06001 56.5739 0 48.4639 0C39.9639 0 31.6671 2.27 24.4171 6.38001C17.1771 10.49 10.9917 16.46 6.72174 23.85C2.78174 30.67 0.471743 38.69 0.471743 47.57V47.75C0.0516995 50.62 -0.0922824 53.6 0.057681 56.67L0.252993 60.3C0.213015 61.97 0.272708 63.68 0.432681 65.41L0.471743 65.76V187.95C0.471743 197.76 3.07642 206.83 7.52643 214.52C11.8264 221.96 17.8605 228.11 24.9405 232.4C32.0405 236.71 40.197 239.15 48.6671 239.15ZM34.9249 227.91C42.1449 231.76 50.3067 233.66 58.5967 233.08C55.2667 233.93 51.9314 234.34 48.6514 234.33C41.0614 234.33 33.767 232.15 27.4171 228.3C21.0371 224.43 15.567 218.86 11.6671 212.11C7.63703 205.14 5.27643 196.9 5.27643 187.94V139.55C6.4364 155.59 7.6864 171.63 9.02643 187.65C9.71643 196.29 12.4627 204.18 16.6827 210.86C21.2827 218.15 27.6349 224.03 34.9249 227.91ZM213.183 113.62C212.833 107.55 211.316 101.52 208.636 95.94C209.016 96.52 209.374 97.12 209.714 97.72C213.564 104.38 215.461 111.91 215.441 119.42C215.42 126.92 213.481 134.43 209.651 141.06C206.081 147.24 200.864 152.67 194.034 156.62L146.901 183.88C154.441 179.42 161.875 174.86 169.175 170.19C177.615 164.8 185.794 159.35 193.714 153.84C199.944 149.56 204.695 144.09 207.925 137.99C211.925 130.47 213.673 122 213.183 113.62ZM134.722 47.44C128.342 44.22 121.932 41 115.472 37.78C107.342 33.69 99.2305 29.69 91.1905 25.77C83.2905 21.93 75.1577 18.04 66.8077 14.11C59.2577 10.56 51.4024 9.14001 43.8624 9.51001C35.3324 9.93001 27.1977 12.64 20.3077 17.13C17.5677 18.91 15.0274 20.98 12.7374 23.29C16.4174 18.01 21.2564 13.67 26.7764 10.54C33.2964 6.84001 40.7839 4.8 48.4639 4.8C55.7739 4.8 63.2552 6.66 70.2452 10.69C91.7452 22.42 113.262 34.87 134.722 47.44ZM68.1514 226.16L68.5733 226.09C65.2533 227.3 61.9055 228.01 58.5655 228.27C51.0755 228.86 43.6949 227.16 37.1749 223.69C30.6149 220.2 24.8974 214.89 20.7374 208.31C16.9174 202.26 14.4277 195.11 13.8077 187.26C12.6277 173.2 11.5252 159.22 10.4952 145.33C12.5152 158.98 14.6864 172.7 17.0264 186.5C18.2064 193.88 20.9442 200.55 24.7842 206.23C29.6642 213.43 36.3111 219.08 43.8311 222.59C51.3811 226.11 59.8014 227.49 68.1514 226.16ZM205.941 108.79C205.18 102.46 203.092 96.22 199.722 90.58C200.202 91.2 200.668 91.83 201.128 92.48C205.538 98.91 207.977 106.36 208.417 113.88C208.847 121.41 207.296 129.02 203.706 135.74C200.816 141.19 196.575 146.08 190.995 149.91C182.935 155.51 174.808 160.94 166.628 166.16C161.098 169.69 155.485 173.17 149.816 176.59C156.066 172.75 162.146 168.77 168.026 164.66C175.896 159.16 183.406 153.44 190.526 147.53C195.466 143.54 199.223 138.72 201.823 133.46C205.603 125.8 206.941 117.19 205.941 108.79ZM121.823 46.32C117.963 44.65 114.103 42.98 110.253 41.34C102.243 37.85 94.2127 34.5 86.1827 31.29C78.2327 28.09 70.1461 24.97 61.9561 21.93C54.7461 19.25 47.433 18.39 40.503 19.05C31.953 19.86 23.9771 22.98 17.4171 27.82C14.637 29.87 12.1114 32.22 9.90143 34.85C13.0814 29.29 17.587 24.63 22.9171 21.16C29.117 17.12 36.4311 14.68 44.0811 14.3C50.8811 13.96 57.9664 15.25 64.7764 18.45C72.6864 22.17 80.7946 26.05 89.1046 30.09C97.2545 34.05 105.341 38.05 113.331 42.07C116.153 43.4757 118.978 44.8914 121.8 46.307L121.823 46.32ZM76.2608 218.58C76.5908 218.5 76.9152 218.42 77.2452 218.33C74.0252 219.88 70.717 220.9 67.4171 221.43C60.037 222.61 52.578 221.38 45.878 218.25C39.158 215.11 33.1742 210.03 28.7842 203.54C25.3042 198.4 22.8208 192.37 21.7608 185.71C19.7508 173.87 17.8745 162.09 16.1046 150.37C18.6746 161.68 21.4449 173.08 24.4249 184.56C25.8949 190.56 28.4542 196 31.7842 200.68C36.9042 207.88 43.8858 213.35 51.6358 216.53C59.4258 219.72 68.0008 220.6 76.2608 218.58ZM198.573 104.91C197.373 98.31 194.651 91.89 190.511 86.23C191.131 86.9 191.724 87.58 192.284 88.28C197.274 94.46 200.267 101.82 201.167 109.35C202.067 116.86 200.871 124.53 197.511 131.33C195.211 136 191.877 140.27 187.487 143.81L187.456 143.83C180.366 149.71 172.966 155.36 165.276 160.73C162.296 162.81 159.276 164.85 156.206 166.86C159.706 164.5 163.098 162.07 166.378 159.59C173.728 154.02 180.568 148.11 186.878 141.9C190.638 138.33 193.525 134.24 195.566 129.84C199.165 122.06 200.103 113.34 198.573 104.91ZM115.628 48.86C112.318 47.63 108.994 46.42 105.644 45.21C97.8436 42.31 90.0521 39.61 82.2921 37.09C74.2821 34.5 66.1833 32.08 58.0733 29.83C51.3433 27.96 44.6771 27.59 38.4171 28.44C29.817 29.62 21.9505 33.13 15.6905 38.28C12.8805 40.6 10.4055 43.26 8.31549 46.19C10.9755 40.41 15.133 35.46 20.253 31.68C26.143 27.34 33.304 24.54 40.9639 23.81C47.2039 23.22 53.7821 23.99 60.2921 26.41C68.2321 29.36 76.2814 32.47 84.4014 35.73C92.4314 38.96 100.438 42.29 108.378 45.75C110.798 46.78 113.218 47.82 115.628 48.86ZM83.3077 210.45C83.7477 210.3 84.1958 210.14 84.6358 209.97C81.5858 211.83 78.3814 213.14 75.1514 213.93C67.8914 215.7 60.3439 214.92 53.4639 212.1C46.5439 209.26 40.2805 204.36 35.6905 197.9C32.6905 193.69 30.3933 188.8 29.0733 183.4L29.0655 183.36C26.5455 173.65 24.1761 164 21.9561 154.42C24.8061 163.52 27.8614 172.69 31.1514 181.92C32.6814 186.48 34.8777 190.63 37.5577 194.29C42.9077 201.6 50.2564 207 58.2764 209.89C66.3464 212.79 75.1377 213.18 83.3077 210.45ZM191.206 101.94C189.526 95.09 186.102 88.51 181.112 82.91C181.892 83.61 182.637 84.34 183.347 85.08C188.937 90.98 192.502 98.25 193.862 105.75C195.222 113.22 194.394 120.95 191.214 127.82C189.424 131.67 186.883 135.27 183.573 138.41L183.542 138.44C177.392 144.5 170.707 150.28 163.487 155.75C162.947 156.16 162.418 156.56 161.878 156.96C162.718 156.3 163.542 155.64 164.362 154.97C171.282 149.33 177.485 143.29 182.925 136.91C185.615 133.91 187.721 130.6 189.261 127.1C192.731 119.21 193.286 110.37 191.206 101.94ZM109.706 51.78C107.036 50.95 104.36 50.13 101.691 49.33C94.1305 46.96 86.4842 44.82 78.7843 42.93C70.9342 40.98 63.0067 39.27 55.0967 37.79C49.0067 36.65 43.0664 36.66 37.5264 37.62C28.8064 39.13 21.0333 42.99 15.0733 48.43C12.2433 51.01 9.82361 53.95 7.89362 57.16C10.0236 51.24 13.8117 46.04 18.7217 41.98C24.2917 37.38 31.3264 34.25 39.0264 33.2C44.6765 32.42 50.6964 32.77 56.7764 34.45C64.7564 36.66 72.7855 39.07 80.8155 41.66C88.6355 44.19 96.383 46.87 104.003 49.71L104.034 49.72C105.922 50.3991 107.811 51.0882 109.698 51.7773L109.706 51.78ZM89.2608 201.86C89.7708 201.64 90.2821 201.4 90.7921 201.15L90.4171 201.41L90.3233 201.47C87.6233 203.44 84.7442 204.91 81.7843 205.9C74.6643 208.27 66.9858 207.92 59.8858 205.37C52.7458 202.8 46.197 197.98 41.4171 191.45C39.017 188.17 37.0427 184.45 35.6827 180.36L35.6749 180.32C32.9449 172.65 30.3761 165.04 27.9561 157.49C30.8261 164.49 33.9027 171.55 37.1827 178.66C38.5027 181.7 40.1252 184.51 41.9952 187.06C47.5552 194.64 55.3127 200.08 63.6827 202.75C72.1027 205.45 81.1708 205.35 89.2608 201.86ZM183.886 99.77C181.666 92.74 177.475 86.05 171.566 80.58C172.515 81.3 173.422 82.06 174.292 82.83C180.532 88.45 184.702 95.59 186.542 103.07C188.382 110.49 187.908 118.26 184.878 125.17C183.558 128.2 181.712 131.08 179.362 133.69L179.323 133.74C175.023 138.79 170.232 143.61 164.972 148.19C170.252 143.27 174.851 138.03 178.761 132.51C180.511 130.19 181.925 127.74 182.995 125.21C186.385 117.19 186.546 108.21 183.886 99.77ZM104.136 55.08C102.216 54.59 100.285 54.11 98.3546 53.64C90.9246 51.72 83.4711 50.11 76.0811 48.82C68.4511 47.48 60.7555 46.44 53.0655 45.69C47.8055 45.17 42.733 45.46 38.003 46.42C29.063 48.22 21.3011 52.42 15.5811 58.12C12.7111 60.97 10.3624 64.2 8.61237 67.7C10.1924 61.68 13.6133 56.27 18.3233 51.98C23.6233 47.14 30.5567 43.7 38.3467 42.35C43.3568 41.48 48.7252 41.47 54.2452 42.5C62.0152 43.95 69.8471 45.64 77.6671 47.58C85.207 49.44 92.7664 51.55 100.276 53.91L100.308 53.92C100.864 54.0895 101.416 54.257 101.972 54.4243C102.695 54.6421 103.418 54.8594 104.136 55.08ZM97.2452 191.07C99.6352 189.66 102.033 188.19 104.433 186.68C100.623 189.27 96.8321 191.77 93.0421 194.19L92.9171 194.28C91.1671 195.56 89.2924 196.62 87.3624 197.46C80.3824 200.48 72.498 200.54 65.128 198.19C57.708 195.82 50.8045 190.98 45.8546 184.23C44.1746 181.93 42.7121 179.41 41.5421 176.71L41.5264 176.65C38.8664 170.89 36.3461 165.16 33.9561 159.47C36.6161 164.55 39.4349 169.68 42.4249 174.83C43.2049 176.26 44.063 177.65 45.003 178.98C50.713 187.08 58.9911 192.72 67.8311 195.27C76.7411 197.84 86.2352 197.27 94.2452 192.92C95.2852 192.36 96.2952 191.73 97.2452 191.07ZM176.636 98.37C173.796 91.14 168.692 84.36 161.722 79.09C162.912 79.82 164.056 80.6 165.136 81.43C172.096 86.72 176.932 93.75 179.292 101.22C181.622 108.6 181.503 116.41 178.573 123.34C177.633 125.56 176.411 127.7 174.901 129.68L174.855 129.74C172.305 133.34 169.427 136.83 166.237 140.19C169.367 136.57 172.061 132.8 174.331 128.9C175.301 127.38 176.133 125.77 176.823 124.1C180.203 115.95 179.946 106.83 176.636 98.37ZM95.6046 58.07C88.4345 56.58 81.2164 55.46 74.0264 54.7C66.6364 53.92 59.2336 53.51 51.8936 53.45C47.6836 53.42 43.6524 53.86 39.8624 54.7C30.5524 56.78 22.6667 61.3 17.0967 67.24C14.1667 70.37 11.8655 73.89 10.3155 77.67C11.3455 71.6 14.4261 66.02 18.9561 61.51C24.0461 56.45 30.9527 52.71 38.9327 51.1C43.2127 50.23 47.8245 49.97 52.6046 50.44C60.0745 51.17 67.643 52.19 75.253 53.53C82.603 54.82 89.9214 56.39 97.1514 58.27L97.1905 58.28C97.5005 58.355 97.818 58.4325 98.128 58.51C98.438 58.5875 98.7477 58.665 99.0577 58.74C97.9091 58.5103 96.7532 58.2897 95.6046 58.07ZM97.7921 184.11C102.312 181.78 106.851 179.2 111.401 176.4C105.861 180.17 100.282 183.71 94.7218 187L94.5655 187.1C93.7055 187.7 92.8339 188.25 91.9639 188.71C85.0939 192.43 76.8914 192.91 69.1514 190.68C61.3414 188.43 54.0027 183.42 48.9327 176.23C48.1227 175.08 47.3514 173.85 46.6514 172.55L46.6124 172.49C44.1824 168.31 41.867 164.15 39.6671 160.01C41.9771 163.52 44.4039 167.06 46.9639 170.61C52.7539 179.23 61.5152 185.09 70.7452 187.56C80.0752 190.05 89.9221 189.11 97.7921 184.11ZM169.464 97.56C165.954 90.26 159.901 83.54 151.831 78.56C153.201 79.25 154.525 80 155.816 80.81C163.626 85.76 169.255 92.68 172.175 100.12C175.045 107.45 175.281 115.31 172.401 122.27C171.831 123.64 171.124 125 170.284 126.33L170.237 126.42C168.877 128.78 167.344 131.08 165.644 133.33C167.274 130.89 168.675 128.38 169.855 125.82C170.215 125.11 170.543 124.41 170.823 123.73C174.273 115.4 173.574 106.07 169.464 97.56ZM93.8858 62.62L93.4249 62.55C86.5049 61.44 79.5649 60.78 72.6749 60.53C65.5249 60.27 58.4542 60.45 51.5342 61.02C48.7442 61.24 46.0249 61.67 43.4249 62.27C33.4549 64.56 25.2258 69.42 19.6358 75.64C16.5558 79.08 14.267 82.93 12.9171 87.02C13.4271 80.96 16.1711 75.24 20.5811 70.53C25.5311 65.25 32.5636 61.23 40.8936 59.38C44.3336 58.62 48.0167 58.22 51.8467 58.25C58.9867 58.31 66.2365 58.71 73.5264 59.48C80.3064 60.19 87.1059 61.23 93.8858 62.62ZM23.2764 83.08C19.8664 86.88 17.4933 91.14 16.3233 95.58C16.3333 89.56 18.8261 83.72 23.2061 78.84C28.1561 73.32 35.523 69 44.503 66.94C46.853 66.4 49.3427 66.01 51.9327 65.8C58.7427 65.23 65.6208 65.06 72.5108 65.31C77.9908 65.51 83.503 65.98 89.003 66.73C83.333 66.2 77.6408 66.04 72.0108 66.22C65.1908 66.43 58.4974 67.15 51.9874 68.3L49.4327 68.81C38.2027 71.27 29.1765 76.5 23.2764 83.08ZM97.4014 177.36C102.621 175.2 107.845 172.65 112.995 169.74C107.215 173.47 101.366 176.87 95.5264 179.9L95.3233 180.01C88.6233 184.31 80.1152 185.1 71.9952 182.93C63.8152 180.74 56.0661 175.56 50.9561 167.95L50.9014 167.88C48.8414 165.03 46.8617 162.18 44.9717 159.35C46.8117 161.58 48.743 163.83 50.753 166.08C56.593 173.1 64.6205 177.81 72.9405 179.84C81.4005 181.9 90.2014 181.21 97.4014 177.36ZM162.276 97.14C158.016 90.01 151.046 83.55 141.956 78.93L142.308 79.05C143.538 79.57 144.767 80.14 145.987 80.76C154.937 85.36 161.544 92.17 165.144 99.64C168.674 106.94 169.304 114.87 166.394 121.88L165.526 123.77C164.936 125.03 164.297 126.28 163.597 127.52C164.247 126.14 164.818 124.74 165.308 123.33C168.608 114.9 167.306 105.55 162.276 97.14ZM27.6671 89.8C23.827 94 21.3245 98.66 20.3546 103.46C19.8945 97.42 22.2433 91.39 26.8233 86.28C32.0633 80.43 40.2105 75.75 50.4405 73.5L52.7921 73.04C59.1321 71.91 65.6236 71.21 72.1436 71.01C76.1736 70.88 80.2467 70.94 84.3468 71.19C80.1767 71.13 76.0227 71.32 71.9327 71.73C65.5127 72.37 59.2158 73.57 53.1358 75.27C42.0658 78.36 33.367 83.58 27.6671 89.8ZM95.9952 170.96C101.235 169.45 106.432 167.47 111.542 165.06C106.222 168.1 100.833 170.76 95.4327 172.99L95.2139 173.09C89.0739 176.39 81.4455 176.98 74.0655 175.18C66.6855 173.38 59.5714 169.21 54.4014 162.99L54.3467 162.93C52.6867 161.07 51.0821 159.22 49.5421 157.37C50.8921 158.66 52.2839 159.94 53.7139 161.23C59.4439 166.71 66.6577 170.42 74.0577 172.12C81.5877 173.86 89.3352 173.53 95.9952 170.96ZM155.847 98.33C151.117 91.48 143.531 85.25 133.691 80.71C134.6 81.01 135.506 81.31 136.386 81.63C146.316 85.87 153.816 92.37 158.136 99.6C162.426 106.78 163.564 114.67 160.784 121.68L160.745 121.78C160.625 122.13 160.508 122.47 160.378 122.81C160.498 122.38 160.606 121.96 160.706 121.53C162.796 113.87 160.957 105.73 155.847 98.33ZM32.0421 96.59C28.0721 100.98 25.648 105.72 24.878 110.52C24.008 104.55 26.2961 98.39 31.2061 93.03C36.3261 87.45 44.2549 82.73 54.4249 79.89C60.2349 78.27 66.267 77.12 72.4171 76.5C75.207 76.22 78.0224 76.05 80.8624 75.99C78.0324 76.2 75.2374 76.54 72.4874 77.01C66.4574 78.04 60.593 79.68 55.003 81.86C44.923 85.78 37.1721 90.91 32.0421 96.59ZM93.6671 164.88C98.4871 164.17 103.257 163.02 107.917 161.45C103.527 163.43 99.0611 165.08 94.5811 166.38L94.3624 166.45C88.5924 168.71 81.7858 168.98 75.1358 167.45C68.5459 165.93 62.1221 162.65 57.0421 157.78L56.9717 157.72C55.7017 156.58 54.4764 155.45 53.2764 154.31C54.1464 154.95 55.0461 155.59 55.9561 156.23C61.3961 160.23 67.7027 163.02 74.1827 164.5C80.7227 165.99 87.447 166.15 93.6671 164.88ZM127.847 83.89C126.577 83.34 125.282 82.82 123.972 82.33C126.282 83.05 128.552 83.83 130.792 84.66C140.282 88.87 147.517 94.68 151.917 101.05C156.047 107.03 157.664 113.5 156.284 119.52C157.004 113.03 154.752 106.39 149.862 100.23C145.042 94.17 137.615 88.52 127.925 83.93L127.847 83.89ZM36.4561 103.24C32.6361 107.58 30.3705 112.07 29.6905 116.62C29.6305 116.28 29.5708 115.95 29.5108 115.62C28.9008 110.34 31.0111 104.86 35.5811 99.81C40.2211 94.67 47.3617 89.98 56.7217 86.34C62.0017 84.28 67.5542 82.73 73.2843 81.75C74.9242 81.47 76.5908 81.23 78.2608 81.05C76.6808 81.32 75.1233 81.65 73.5733 82.02C67.9234 83.39 62.5217 85.42 57.4717 88.02C48.1117 92.84 41.0961 97.97 36.4561 103.24ZM90.6046 159.16C94.4146 159.16 98.188 158.85 101.878 158.27C98.948 159.07 95.9661 159.69 92.9561 160.14L92.8155 160.17C87.2455 161.33 81.163 161.18 75.253 159.83C69.403 158.49 63.7021 155.97 58.7921 152.37L58.7452 152.34C57.7652 151.65 56.808 150.97 55.878 150.28C56.398 150.56 56.9317 150.84 57.4717 151.12C62.5217 153.72 67.9234 155.75 73.5733 157.12C79.0733 158.45 84.7846 159.16 90.6046 159.16ZM123.737 88.02C121.637 86.94 119.465 85.95 117.245 85.07C120.215 86.01 123.115 87.08 125.925 88.28C134.915 92.54 141.742 97.71 146.112 103.21C149.752 107.81 151.652 112.62 151.612 117.31C151.062 112.53 148.781 107.81 144.761 103.24C140.121 97.97 133.117 92.85 123.737 88.02ZM121.566 92.29C130.396 96.84 136.933 101.59 141.183 106.42C145.053 110.81 146.987 115.24 146.987 119.58C146.987 123.92 145.043 128.34 141.183 132.73C136.933 137.57 130.383 142.32 121.573 146.86C116.833 149.3 111.792 151.2 106.542 152.47C101.452 153.7 96.1258 154.36 90.6358 154.36C85.1358 154.36 79.8017 153.7 74.7218 152.47C69.4718 151.2 64.4205 149.3 59.6905 146.86C50.8605 142.32 44.3233 137.56 40.0733 132.73C36.2033 128.34 34.2764 123.91 34.2764 119.57C34.2764 115.22 36.2133 110.8 40.0733 106.41C44.3333 101.57 50.8727 96.82 59.6827 92.28C89.003 79.5661 116.822 90.021 121.566 92.29Z"
        fill="url(#paint1_linear_401_75)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_401_75"
          x1="91"
          y1="75"
          x2="91"
          y2="145"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#01C4C8" />
          <stop offset="1" stopColor="#01B5BE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_401_75"
          x1="25.8306"
          y1="197.165"
          x2="194.359"
          y2="41.9424"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0098AC" />
          <stop offset="1" stopColor="#00E5DD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;