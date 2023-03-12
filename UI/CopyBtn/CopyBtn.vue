<template>
  <div class="copyBtn" @click="getToClipBoard">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_145_5906)">
        <path d="M3.75 0C2.75544 0 1.80161 0.395088 1.09835 1.09835C0.395088 1.80161 0 2.75544 0 3.75L0 32.5C0 33.163 0.263392 33.7989 0.732233 34.2678C1.20107 34.7366 1.83696 35 2.5 35V3.75C2.5 3.41848 2.6317 3.10054 2.86612 2.86612C3.10054 2.6317 3.41848 2.5 3.75 2.5H35C35 1.83696 34.7366 1.20107 34.2678 0.732233C33.7989 0.263392 33.163 0 32.5 0L3.75 0Z" />
        <path d="M8.75 5C7.75544 5 6.80161 5.39509 6.09835 6.09835C5.39509 6.80161 5 7.75544 5 8.75V36.25C5 37.2446 5.39509 38.1984 6.09835 38.9017C6.80161 39.6049 7.75544 40 8.75 40H23.965C24.9592 39.9991 25.9124 39.6035 26.615 38.9L38.9025 26.615C39.605 25.912 39.9998 24.9589 40 23.965V8.75C40 7.75544 39.6049 6.80161 38.9017 6.09835C38.1984 5.39509 37.2446 5 36.25 5H8.75ZM7.5 8.75C7.5 8.41848 7.6317 8.10054 7.86612 7.86612C8.10054 7.6317 8.41848 7.5 8.75 7.5H36.25C36.5815 7.5 36.8995 7.6317 37.1339 7.86612C37.3683 8.10054 37.5 8.41848 37.5 8.75V22.5H26.25C25.2554 22.5 24.3016 22.8951 23.5983 23.5983C22.8951 24.3016 22.5 25.2554 22.5 26.25V37.5H8.75C8.41848 37.5 8.10054 37.3683 7.86612 37.1339C7.6317 36.8995 7.5 36.5815 7.5 36.25V8.75ZM25 36.9825V26.25C25 25.9185 25.1317 25.6005 25.3661 25.3661C25.6005 25.1317 25.9185 25 26.25 25H36.9825L25 36.9825Z"/>
      </g>
      <defs>
        <clipPath id="clip0_145_5906">
          <rect width="40" height="40" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    <div class="copyBtn__text">
      Скопировать
    </div>

  </div>
</template>

<script>
export default {
  name:"CopyBtn",
  props:{
    text:String
  },
  methods: {
    getToClipBoard: function (){
      navigator.clipboard.writeText(this.text)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.copyBtn{
  cursor: pointer;
  user-select: none;
  svg{
    fill: #0049B7;
  }
  @include smallText;
  color: #0049B7;
  display: flex;
  gap: 10px;
  align-items: center;
  width: fit-content;
  &:hover{
    color: #104576;
    svg {
      fill: #104576;

    }
  }
  &:active{
    color: #3A79B4;
    svg {
      fill: #3A79B4;
    }
  }
}
</style>
