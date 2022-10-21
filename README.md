# Storybook MDX not working v7

To see results, simply uses : `npm run storybook`

Here is a reproducible repo to show an error with MDX and Storybook when multiple components are used inside a single story.

There are two main stories: `working` and `not-working`.

The `not-working` story uses the recommandation by Storybook for the future migration.

```
`component` story return value is deprecated, and will be removed in Storybook 7.0.
Instead, use `export const default = () => ({ component: AppComponent });`
or

export const Primary: Story = () => ({});
Primary.parameters = { component: AppComponent };

Read more at
- https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-angular-story-component).
- https://storybook.js.org/docs/angular/writing-stories/parameters
```
