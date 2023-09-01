<template>
  <div class="trackView">
    <v-container class="global_container">
      <!-- Start:: buttons -->
      <div class="buttons">
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
          <v-tab value="1">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="height: 30px; width: 30px; margin-bottom: 5px"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5.00003 15.7468V18C5.00003 18.5523 5.44775 19 6.00003 19H12H18C18.5523 19 19 18.5523 19 18V15.7468"
                  class="stroke"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12.2023 5.91651L12.2023 14.4165"
                  class="stroke"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.546 8.26682L12.2021 5L8.8583 8.26682"
                  class="stroke"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <h3>I'm the sender</h3>
          </v-tab>
          <v-tab value="2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="height: 30px; width: 30px; margin-bottom: 5px"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5.00004 15.7468V18C5.00004 18.5523 5.44775 19 6.00004 19H12H18C18.5523 19 19 18.5523 19 18V15.7468"
                  class="stroke"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12.2023 13.5L12.2023 5"
                  class="stroke"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.546 11.1497L12.2021 14.4165L8.85831 11.1497"
                  class="stroke"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <h3>I'm the reciever</h3></v-tab
          >
        </v-tabs>
      </div>
      <!-- End:: buttons -->
      <v-form @submit.prevent="sendTrackNum">
        <!-- Start:: Cards -->
        <div class="cards">
          <div class="vCard">
            <v-window v-model="tab">
              <!-- Start:: First Card -->
              <v-window-item value="1">
                <v-container fluid>
                  <div class="first_tab">
                    <h5 style="font-size: 15px; font-weight: 400">
                      To track a transfer, enter your 10-digits tracking number (MTCN):
                    </h5>

                    <!-- OTP -->
                    <div class="otp">
                      <v-otp-input
                        variant="solo"
                        inputmode="numeric"
                        length="10"
                        placeholder="0"
                        v-model.number="code"
                        type="number"
                        v-keyboard="{ allowedChars: '0123456789' }"
                        focused="false"
                        @finish="onFinish"
                      ></v-otp-input>
                    </div>
                  </div>
                </v-container>
                <!-- Start:: MTCN Link -->

                <div class="text-center">
                  <v-dialog v-model="dialog" width="auto">
                    <template v-slot:activator="{ props }">
                      <div class="mtcn_link">
                        <a v-bind="props" class="mtcn-link">Where can i find MTCN ?</a>
                      </div>
                    </template>

                    <v-card>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog = false">
                          <v-icon icon="mdi mdi-close" />
                        </v-btn>
                      </v-card-actions>
                      <v-card-text>
                        If you sent money online, you'll find your MTCN on your transfer history or
                        emailed receipt.<br /><br />
                        If you sent money at a Western Union agent location, your MTCN is on your
                        printed receipt.
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </div>

                <!-- End:: MTCN Link -->
              </v-window-item>
              <!-- End:: First card -->

              <!-- Start:: Second card -->
              <v-window-item value="2">
                <v-container fluid>
                  <div class="second_tab">
                    <h5 style="font-size: 15px; font-weight: 400">
                      To track a transfer, enter your 10-digits tracking number (MTCN):
                    </h5>

                    <!-- OTP -->
                    <div class="otp">
                      <v-otp-input
                        variant="solo"
                        length="10"
                        placeholder="0"
                        v-model.number="code"
                        type="number"
                        inputmode="numeric"
                        focused="false"
                        @finish="onFinish"
                        v-keyboard="{ allowedChars: '0123456789' }"
                      ></v-otp-input>
                    </div>
                  </div>
                </v-container>
                <!-- Start:: MTCN Link -->
                <div class="mtcn_link">
                  <a href="#" class="mtcn-link">Ask the sender for MTCN</a>
                </div>
                <!-- End:: MTCN Link -->
              </v-window-item>
              <!-- End:: Second card -->
            </v-window>
          </div>
        </div>
        <!-- End:: Cards -->

        <!-- Start:: button -->
        <div class="submit_div">
          <button class="submit_btn" type="submit">Next</button>
        </div>
        <!-- End:: button -->
      </v-form>
    </v-container>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      tab: null,
      dialog: false,

      code: ''
    }
  },

  methods: {
    sendTrackNum() {
      if (this.code.length == 10) {
        localStorage.setItem('yourCode', this.code)
        this.$router.push('/progress')
      }
    }
  }
}
</script>

<style>
.router-link-active {
  background-color: #000;
}

/* Start:: buttons */
.buttons {
  margin-top: 12px;
}

.stroke {
  stroke: #bbb;
}

.v-btn__content {
  display: flex;
  flex-direction: column;
}

.v-tabs--density-default {
  --v-tabs-height: 91px;
}

.v-btn {
  color: #bbb !important;
  text-transform: none;
  background: #fff;
  border-radius: 0;
}

.v-slide-group-item--active {
  background: #3b8dd0;
  color: #fff !important;
  height: 93px !important;
}

.v-btn h3 {
  font-weight: 500;
}

/* End buttons */

/* Start:: cards */
.cards {
  margin: 25px 0;
}

.vCard {
  box-shadow: none;
  border-radius: 0 !important;
}

.v-window-item .v-container {
  border: 1px solid #cccccc54;
}

.v-dialog > .v-overlay__content > .vCard > .vCard-text {
  margin-bottom: 22px;
}

.vCard-actions .v-btn {
  justify-content: end;
}

.mdi-close {
  color: red;
  font-size: 23px;
}

.v-window-item .v-container {
  background: #fff;
}

/* Start:: OTP */

.v-field--variant-solo,
.v-field--variant-solo-filled {
  background: none !important;
  border-color: transparent;
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  box-shadow: none !important;
}

.v-otp-input {
  justify-content: start !important;
}

.v-field__field {
  justify-content: center !important;
}
.v-field--foucsed {
  border: none !important;
}
.v-otp-input .v-field {
  height: 70%;
  border-bottom: 2px solid #ccc !important;
  border-radius: 0 !important;
}
.v-otp-input__field[type='number'] {
  font-size: 25px !important;
}
.otp input {
  margin: 10px;
  width: 40px;
  text-align: center;
  color: #000000cc;

  font-weight: 600;
  margin: 0 10px !important;
}

.otp input:focus {
  border: none;
  outline: none;
}

.otp div {
  margin: 7px 0 7px;
  padding: 0;
}

/* End:: OTP */

/* End:: cards */

/*  Start:: MTCN Link */
.mtcn_link {
  text-align: end;
  margin-top: 7px;
}

.mtcn_link a {
  text-decoration: none;
  color: #3b8dd0;
  cursor: pointer;
  font-weight: 600;
}

/*  End:: MTCN Link */

/* Start:: submit_btn */

.submit_div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  position: absolute;
  bottom: 0;
  left: 45%;
}

.submit_btn {
  background: #3b8dd0 !important;
  color: #fff !important;
  padding: 12px 20px;
  width: 160px;
}

/* End:: submit_btn */

/* Media 600 */
@media (max-width: 600px) {
  .v-container {
    padding-bottom: 0 !important;
  }

  .global_container {
    max-width: 100%;
    margin: 0 !important;
    padding: 0;
  }

  .v-window-item {
    background: transparent;
  }

  .v-window-item .v-container {
    background: #fff;
  }

  .first_tab,
  .second_tab {
    padding: 7px 5px;
  }

  .v-btn {
    margin: 0;
    width: 50%;
  }

  .submit_div,
  .text {
    left: 0 !important;
    width: 100% !important;
  }

  .submit_btn {
    width: 100%;
  }

  .otp input {
    margin: 7px;
    width: 35px;
    font-size: 20px;
  }

  .mtcn_link {
    margin-right: 4px;
  }

  .mtcn_link a {
    font-size: 14px;
  }
}

/* Media 520 */
@media (max-width: 520px) {
  .otp input {
    margin: 5px;
    width: 30px;
    font-size: 18px;
    padding-bottom: 5px !important;
  }
}

@media (max-width: 440px) {
  .otp input {
    margin: 3px;
    width: 24px !important;
    font-size: 22px !important;
    font-weight: 100;
  }

  .mtcn_link a {
    font-size: 15px;
  }
}

@media (max-width: 340px) {
  .otp input {
    margin: 3px;
    width: 30px;
    font-size: 14px;
  }
}

/* Start:: Text */

.text {
  text-align: center;
  color: #131316a1;
  position: absolute;
  bottom: 60px;
  left: 30%;
}

/* End:: Text */

/* Start:: Tracking Button */
.tracking_button {
  display: flex;
  justify-content: center;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 21px 0;
}

.tracking_button button {
  color: #0859a0;
}

.tracking_button svg {
  stroke: #0859a0;
  stroke-width: 1.4;
  display: block;
  width: 35px;
  height: 35px;
  margin: auto;
}

/* End:: Tracking Button */

/* Start:: Stepper */
.stepper {
  margin: 20px 0;
}

/* End:: Stepper */
</style>
