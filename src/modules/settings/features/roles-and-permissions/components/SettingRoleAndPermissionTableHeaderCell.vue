<script setup lang="ts">
import {
  type DropdownMenuItem,
  VcDropdownMenu,
  VcIcon,
} from '@wisemen/vue-core'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppUnstyledButton from '@/components/app/button/AppUnstyledButton.vue'
import { TEST_ID } from '@/constants/testId.constant'
import type { SettingRole } from '@/models/setting-role/role.model.ts'
import type { RoleUuid } from '@/models/setting-role/roleUuid.model.ts'

const props = defineProps<{
  role: SettingRole
}>()

const emit = defineEmits<{
  deleteRole: [RoleUuid]
}>()

const { t } = useI18n()

const dropDownItems = computed<DropdownMenuItem[]>(() => ([
  {
    isDestructive: true,
    icon: 'trash',
    label: t('module.settings.roles_and_permissions.table.delete_role'),
    type: 'option',
    onSelect: (): void => {
      emit('deleteRole', props.role.uuid)
    },
  },
]))
</script>

<template>
  <div class="flex items-center justify-center gap-4 text-nowrap p-3 px-6 text-sm text-secondary">
    <span :data-test-id="TEST_ID.SETTINGS.ROLES.OVERVIEW.TABLE.ROLE_NAME">
      {{ props.role.name }}
    </span>
    <VcDropdownMenu
      :items="dropDownItems"
      :is-arrow-hidden="true"
      side="top"
    >
      <template #trigger>
        <AppUnstyledButton aria-label="Actions">
          <VcIcon
            icon="threeDots"
            class="size-4"
          />
        </AppUnstyledButton>
      </template>
    </VcDropdownMenu>
  </div>
</template>
