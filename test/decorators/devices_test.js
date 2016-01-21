import { expect } from 'chai';
import { default as decorator } from '../../lib/decorators/devices.js';

describe('deviceDecorator', () => {
  var config = {
    remotes: [
      {
        name: 'test-remote-1',
        codes: {
          BTN_1: '0x001',
          BTN_2: '0x002',
          BTN_3: '0x003'
        }
      },
      {
        name: 'test-remote-2',
        codes: {
          BTN_4: '0x004',
          BTN_5: '0x005',
          BTN_6: '0x006'
        }
      }
    ]
  }
  var output;

  beforeEach(() => {
    output = decorator(config);
  });

  it('should cherry pick the remote name', () => {
    expect(output[0].name).to.eql('test-remote-1');
    expect(output[1].name).to.eql('test-remote-2');
  });

  it('should have a list of buttons for each remote', () => {
    expect(output[0].codes).to.eql([ 'BTN_1', 'BTN_2', 'BTN_3' ]);
    expect(output[1].codes).to.eql([ 'BTN_4', 'BTN_5', 'BTN_6' ]);
  });
});
