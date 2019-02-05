import { getDeviceTypes } from 'node-simctl';
import { runTests } from './safari-nativewebtap-e2e-tests';
import _ from 'lodash';


/**
 * This test suite can be affected by two environment variables:
 *   1. ALL_DEVICES - will use simctl to get _all_ the iPhone and iPad device
 *                    types available on the current Xcode installation, and
 *                    runs the tests for each one. This is a long process.
 *   2. DEVICE_NAME - the name of a particular device. The tests will be run
 *                    against that device only
 * If neither of these are provided, the tests will be run in their own files,
 * and nothing will be produced here.
 */

describe('Safari - coordinate conversion', async function () {
  let devices;
  if (process.env.ALL_DEVICES) {
    // get all the iPhone and iPad devices available
    devices = await getDeviceTypes();
    devices = devices.filter((device) => device.includes('iPhone') || device.includes('iPad'));
  } else if (process.env.DEVICE_NAME) {
    devices = [process.env.DEVICE_NAME];
  }

  if (!_.isEmpty(devices)) {
    runTests(devices);
  }
});
