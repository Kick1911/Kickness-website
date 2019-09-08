<template>
    <div id="panel">
        <div class="card">
            <div class="card-body">
                <h5>{{ title }}</h5>
                <h6>{{ subtitle }}</h6>
                <p>{{ body }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Panel',
  props: [
    'title',
    'subtitle',
    'body'
  ]
}
</script>
