import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/bootstrap" component="page-bootstrap" exact={false} />
              <stencil-route url="/" component="page-home" exact={false} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
