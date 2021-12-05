<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner rounded class="bg-purple-8 text-white">
     <h5 class="text-center">Сервис по поиску мастеров и заказов</h5>
    </q-banner>
    <q-tree
      :nodes="customize"
      node-key="label"
      default-expand-all
    >
      <template v-slot:default-header="prop">
        <div class="row items-center">
          <q-icon
            :name="prop.node.icon || 'share'"
            :color="prop.node.icon === 'report_problem' ? 'negative' : 'orange'" size="28px"
            class="q-mr-sm"
          />
          <div
            class="text-weight-bold text-primary"
          >{{ prop.node.label }}</div>
        </div>
      </template>

      <template v-slot:default-body="prop">
        <div v-if="prop.node.story">
          <span class="text-weight-bold">ваши действия</span>: {{ prop.node.story }}
        </div>
        <span v-else class="text-weight-light text-black">Что делать дальше?</span>
      </template>
    </q-tree>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      customize: [
        {
          label: 'Вы авторизовались в качестве клиента (заказчика) или мастера (исполнителя)',
          icon: 'help_outline',
          header: 'root',
          children: [
            {
              label: 'Если вы являетесь клиентом или заказчиком',
              icon: 'support_agent',
              header: 'generic',
              children: [
                {
                  label: 'Если не размещали заказ на работу',
                  icon: 'add_road',
                  header: 'generic',
                  body: 'story',
                  story: 'То заходите во вкладку создать заказ и создаёте его'
                },
                {
                  label: 'А если создали ранее заказ',
                  icon: 'add_road',
                  body: 'story',
                  story: 'то заходите в мои заказы, выбираете один из ваших заказов и если подали заявку мастера на выполнение принимаете предложение'
                }
              ]
            },
            {
              label: 'Если вы являетесь мастером или исполнителем',
              icon: 'engineering',
              header: 'generic',
              children: [
                {
                  label: 'Ищите заказы на работу',
                  icon: 'add_road',
                  header: 'generic',
                  body: 'story',
                  story: 'заходите в заказы на работу, далее выбираете заказ который вам понравился и подаёте заявку'
                },
                {
                  label: 'Вы можете подавать заявки не несколько заказов одновременно',
                  icon: 'add_road',
                  body: 'story',
                  story: 'после подачи заявок ждёте подтверждения от клиента, чтобы приступить к работе'
                },
                {
                  label: 'Внимание',
                  icon: 'report_problem',
                  color: 'red',
                  body: 'story',
                  story: 'Не подавайте заявки на одно и тоже время, так как два клиента сразу могут ждать вас в это время'
                }
              ]
            },
          ]
        }
      ]
    }
  }
}
</script>
