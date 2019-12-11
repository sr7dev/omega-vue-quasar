<template>
  <div class="Material">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row" style="margin-top: 10%;">
				<div class="col-1"></div>
				<p class="col-4 fontsize-14 text-left" style="padding-top: 0.3em;">
					{{ $t("W_MATERIAL_STR") }}&nbsp;{{ $t("MKL_SELECT_STR") }}:
				</p>
                <q-select
					class="col-4 fontsize-14"
					color="teal"
					outlined
					v-model="material"
					:options="materials"
					@input="selectMaterial"
                >
                </q-select>
            </div>

			<NavigationBar></NavigationBar>
			<NavigationBar v-bind:next="next" />
          </div>
		</div>
      </div>
    </q-page>
  </div>
</template>
<script>
import NavigationBar from "../components/NavigationBar";
export default {
  	name: "Material",
	  components: { NavigationBar,
	},
  	data() {
    	return {
			materials: ['OAK', 
						'PINE',
						'Material 3 Empty', 
						'Material 4 Empty', 
						'Material 5 Empty', 
						'Material 6 Empty', 
						'Material 7 Empty', 
						'Material 8 Empty', 
						'Material 9 Empty', 
						'Material 10 Empty', 
						'Material 11 Empty', 
						'Material 12 Empty'
			],
			material: 'OAK',
			next: "/materialedit",

    	};	
	},
  	methods: {
		selectMaterial() {
			localStorage.setItem('material', this.material);
		}
	},
	beforeMount() {
		this.material = localStorage.getItem('material') === null ? 'OAK' : localStorage.getItem('material');
	}
};
</script>