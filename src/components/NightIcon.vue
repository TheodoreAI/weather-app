<template>
  <svg
    version="1.1"
    width="64"
    height="64"
    viewbox="0 0 64 64"
    id="svg36"
    sodipodi:docname="night.svg"
    inkscape:version="1.1.1 (c3084ef, 2021-09-22)"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
  >
    <defs id="defs19">
      <filter
        id="blur"
        width="1.6075949"
        height="1.8940092"
        x="-0.30379747"
        y="-0.33179724"
      >
        <feGaussianBlur
          in="SourceAlpha"
          stdDeviation="3"
          id="feGaussianBlur2"
        />
        <feOffset dx="0" dy="4" result="offsetblur" id="feOffset4" />
        <feComponentTransfer id="feComponentTransfer8">
          <feFuncA type="linear" slope="0.05" id="feFuncA6" />
        </feComponentTransfer>
        <feMerge id="feMerge14">
          <feMergeNode id="feMergeNode10" />
          <feMergeNode in="SourceGraphic" id="feMergeNode12" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#blur)" id="night">
      <g transform="translate(20,20)" id="g33">
        <g class="am-weather-moon-star-1" id="g23">
          <polygon
            fill="orange"
            points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7"
            stroke="none"
            stroke-miterlimit="10"
            id="polygon21"
          />
        </g>
        <g class="am-weather-moon-star-2" id="g27">
          <polygon
            fill="orange"
            points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7"
            stroke="none"
            stroke-miterlimit="10"
            transform="translate(20,10)"
            id="polygon25"
          />
        </g>
        <g class="am-weather-moon" id="g31">
          <path
            d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z"
            fill="orange"
            stroke="orange"
            stroke-linejoin="round"
            stroke-width="2"
            id="path29"
          />
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "NightIcon",
};
</script>
