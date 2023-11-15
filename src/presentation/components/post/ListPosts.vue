<script setup lang="ts">
import { ref, onMounted } from 'vue'
import fetchCount from '../../../infrastructure/services/fetchCount'
import LoadPostsUseCase, { ILoadPostsUseCase } from "../../../application/features/LoadPostsUseCase";
import ControlBar from '../counter/ControlBar.vue'
import PostRepository from '../../../infrastructure/repositories/PostRepository'
import ErrorService from '../../../framework/services/ErrorService'



interface Props {
  limit: number,
  alertMessageOnLimit?: string
}

const props = withDefaults(defineProps<Props>(), {
  alertMessageOnLimit: 'can not go any higher'
})

const count = ref<number | null>(null)

onMounted(() => {
  fetchCount((initialCount) => {
    const params: ILoadPostsUseCase = {
      postRepository: new PostRepository(),
      errorService: new ErrorService({
        context: "mounting products detail page"
      })
    };
    const post = new LoadPostsUseCase(params).execute();
    console.log(post)
    count.value = initialCount
  })
})

function addCount(num: number) {
  if (count.value !== null) {
    if (count.value >= props.limit) {
      alert(props.alertMessageOnLimit)
    }
    else {
      count.value += num
    }
  }
}

</script>

<template>
  <p>{{ count }}</p>
  <ControlBar 
    @add-count="addCount"
    @reset-count="count = 0"
  ></ControlBar>
</template>