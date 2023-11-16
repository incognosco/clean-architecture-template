<script setup lang="ts">
    import { container } from 'tsyringe'
    import { ref, onMounted } from 'vue'
    import { UserDataPresenter } from '@/presentation/presenters/UserDataPresenter'

    import { User } from '@/application/domain/entities/UserData'

    const userData = ref(new User(true, ''));
    const message = ref();

    onMounted(() => {
        try {
            const presenter = container.resolve(UserDataPresenter);
            presenter
            .loadUserData()
            .then((res: User) => {
                //this.setUserData(res)
                alert(res.message);
                message.value = res.message;
                userData.value = res
                console.log('Response User Data', res)
            })
            .catch((error) => {
                console.error('error', error)
            })
            .finally(() => {
                //this.setLoading(false)
            })
            
        } catch (error) {
            console.error('error', error)
        }
    });

   
</script>
<template>
    <h1>{{message}}</h1>
    <h1>{{userData.success}}</h1>

</template>