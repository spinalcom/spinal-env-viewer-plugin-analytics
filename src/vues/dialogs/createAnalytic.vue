<!--
Copyright 2020 SpinalCom - www.spinalcom.com

This file is part of SpinalCore.

Please read all of the following terms and conditions
of the Free Software license Agreement ("Agreement")
carefully.

This Agreement is a legally binding contract between
the Licensee (as defined below) and SpinalCom that
sets forth the terms and conditions that govern your
use of the Program. By installing and/or using the
Program, you agree to abide by all the terms and
conditions stated or referenced herein.

If you do not agree to abide by these terms and
conditions, do not demonstrate your acceptance and do
not install or use the Program.
You should have received a copy of the license along
with this file. If not, see
<http://resources.spinalcom.com/licenses.pdf>.
-->

<template>
	<md-dialog
		class="mdDialogContainer"
		:md-active.sync="showDialog"
		@md-closed="closeDialog(false)"
	>
		<md-dialog-title class="dialogTitle">Create Analytics </md-dialog-title>
		<md-dialog-content class="content">
			<md-field>
				<label>Name</label>
				<md-input v-model="analytic.name"></md-input>
			</md-field>

			<md-field>
				<label for="childrenType">Children Type</label>
				<md-select
					v-model="analytic.childrenType"
					name="childrenType"
					id="childrenType"
				>
					<md-option
						v-for="data of types"
						:key="data.type"
						:value="data.type"
						>{{ data.title }}</md-option
					>
				</md-select>
			</md-field>

			<md-field>
				<label>Description</label>
				<md-textarea v-model="analytic.description"></md-textarea>
			</md-field>
		</md-dialog-content>
		<md-dialog-actions>
			<md-button class="md-primary" @click="closeDialog(false)"
				>Close</md-button
			>
			<md-button
				class="md-primary"
				:disabled="disabled()"
				@click="closeDialog(true)"
				>Save</md-button
			>
		</md-dialog-actions>
	</md-dialog>
</template>

<script>
	import { spinalAnalyticService } from "spinal-env-viewer-plugin-analytics-service";
	import { TYPES } from "../../js/types";

	export default {
		name: "dialogComponent",
		props: ["onFinised"],
		data() {
			this.types = TYPES;
			this.contextId;
			this.groupId;

			return {
				showDialog: true,
				analytic: {
					name: "",
					description: "",
					childrenType: undefined,
				},
			};
		},

		methods: {
			opened(option) {
				this.contextId = option.context.id.get();
				this.groupId = option.selectedNode.id.get();
			},

			removed(option) {
				if (option) {
					spinalAnalyticService.createAndLinkAnalytic(
						this.contextId,
						this.groupId,
						this.analytic
					);
				}
				this.showDialog = false;
			},

			closeDialog(closeResult) {
				if (typeof this.onFinised === "function") {
					this.onFinised(closeResult);
				}
			},

			disabled() {
				return (
					this.analytic.name.length === 0 ||
					typeof this.analytic.childrenType === "undefined"
				);
			},
		},
	};
</script>

<style scoped>
	.mdDialogContainer {
		width: 300px;
		height: 450px;
	}

	.mdDialogContainer .dialogTitle {
		text-align: center;
	}

	.mdDialogContainer .content {
	}

	/* .mdIcon {
  display: flex;
  align-items: center;
} */
</style>
