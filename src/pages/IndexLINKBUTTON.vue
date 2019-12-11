<template>
  <div class="Index">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row">
              <div class="col-4">
                <!--<button class="alert" @click="alarms">
    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
    {{ $t("ALARM_STR") }}
  </button>-->
                <LinkButton v-bind:buttonclass="buttons.alert.buttonclass"
                            v-bind:iconclass="buttons.alert.iconclass"
                            v-bind:left=buttons.alert.left
                            v-bind:right=buttons.alert.right
                            v-bind:label="$t('ALARM_STR')"
                            v-bind:path="buttons.alert.path"
                            v-bind:customStyle="buttons.alert.customStyle"></LinkButton>
              </div>
              <div class="col-8">
                <button class="clear">
                  <p class="fontsize-16">
                    {{ $t("MATERIAL_STR") }}
                    {{ $t("EMPTY_STR") }}
                  </p>
                  <!-- <i class="fa fa-pencil margin-left-10" aria-hidden="true"></i> -->
                </button>
              </div>
            </div>

            <div class="row">
              <div style="text-align: center; width: 100%;">
                <button class="blue dash fontsize-16">
                  <a href="#"><i class="fa fa-tint" aria-hidden="true" style="margin-right: 12px"></i></a>
                  <a id="amcid">00.0 %</a>
                </button>
                <p class="fontsize-16" style="margin-top: 5px;">
                  {{ $t("MARKH2_STR") }}
                </p>
                <p class="fontsize-10" style="margin-top: 5px;">
                  {{ $t("CHAIN_STR") }} :
                  {{ $t("RUN_STR") }}
                </p>
                <p class="fontsize-10">
                  {{ $t("LSEN_STR") }} :
                  {{ $t("TGL_OFF_STR") }}
                </p>
              </div>
            </div>

            <div class="row container-left-right nav-bar">
              <div class="col">
                <PrevButton  />
              </div>
              <div class="col" style="display: flex; justify-content: center;">
                <MenuButton />
              </div>
              <div class="col">
                <!--<button class="nav-button" style="float: right" @click="next">
                  {{ labels[0].label = $t("NEXT_STR") }}
                  <i class="fa fa-chevron-right margin-left-10"
                      aria-hidden="true"></i>
                </button>
                    -->
                <LinkButton
                            v-bind:buttonclass="buttons.next.buttonclass"
                            v-bind:iconclass="buttons.next.iconclass"
                            v-bind:left=buttons.next.left
                            v-bind:right=buttons.next.right
                            v-bind:label="$t('NEXT_STR')"
                            v-bind:path="buttons.next.path"
                            v-bind:customStyle="buttons.next.customStyle"
                            ></LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
  import PrevButton from "../components/PrevButton";
  import MenuButton from "../components/MenuButton";
  import LinkButton from "../components/LinkButton";
  export default {
    name: "Index",
    components: {
      PrevButton,
      MenuButton,
      LinkButton,
    },
    data: function () {
      return {
        buttons: {
          alert: {
              buttonclass: "alert",
              iconclass: "fa-exclamation-triangle",
              left: true,
              right: false,
              label: "",
              path: "/alarms",
              customStyle: {}
          },
          next: {
            buttonclass: "nav-button",
            iconclass: "fa-chevron-right",
            left: false,
            right: true,
            label: "",
            path: "/home2",
            customStyle: {
              float: 'right'
            }
          },
        }
      }
    },
    methods: {}
  };
</script>
