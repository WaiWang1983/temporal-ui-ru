<script>
  import { page } from '$app/stores';

  import Alert from '$lib/holocene/alert.svelte';
  import { translate } from '$lib/i18n/translate';
  import { workflowError } from '$lib/stores/workflows';
  import { useDarkMode } from '$lib/utilities/dark-mode';
  import emptyImageDark from '$lib/vendor/empty-state-dark_2x.png';
  import emptyImageLight from '$lib/vendor/empty-state-light_2x.png';

  $: query = $page.url.searchParams.get('query');

  $: noResultsImages = $useDarkMode ? emptyImageDark : emptyImageLight;
</script>

<svelte:head>
  <link rel="preload" as="image" href={emptyImageDark} />
  <link rel="preload" as="image" href={emptyImageLight} />
</svelte:head>
<div
  class="h-auto w-full overflow-hidden xl:flex xl:min-h-[480px] xl:flex-row"
  aria-live="polite"
>
  <div
    class="surface-primary flex w-auto min-w-[280px] flex-col gap-4 p-8 xl:min-w-[520px] xl:flex-1"
  >
    <h2>
      {#if query}
        {translate('workflows.workflow-query-empty-state-title')}
      {:else}
        {translate('workflows.workflow-empty-state-title')}
      {/if}
    </h2>
    {#if $workflowError}
      <Alert
        intent="warning"
        icon="warning"
        title={translate('workflows.workflow-query-error-state')}
        style="overflow-wrap: anywhere"
      >
        {$workflowError}
      </Alert>
    {:else if query}
      <p>
        {translate('workflows.workflow-query-empty-state-preface')}
      </p>
      <p>
        {translate('workflows.workflow-query-empty-state-postface')}
      </p>
    {:else}
      <slot name="cloud" />
      <p>
        {translate('workflows.workflow-empty-state-description')}
      </p>
    {/if}
  </div>
  <div
    class="bg-[#DDD6FE] bg-contain bg-no-repeat xl:flex xl:min-h-full xl:flex-1 xl:items-stretch xl:justify-center"
    style="background-image: url({noResultsImages});"
  >
    <img
      src={noResultsImages}
      alt=""
      class="max-h-full max-w-full object-contain xl:hidden"
    />
  </div>
</div>
