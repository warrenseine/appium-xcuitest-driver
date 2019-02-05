import { runTests } from './safari-nativewebtap-e2e-tests';
import _ from 'lodash';


/*
 * This file runs the nativeWebTap tests on a single device. This structure is
 * necessary because `mocha-parallel-tests` parallelizes based on files, not
 * sessions. So splitting this out is the only way to make it run parllel in the
 * cron jobs.
 */

describe('Safari - coordinate conversion', function () {
  if (_.isEmpty(process.env.ALL_DEVICES) && _.isEmpty(process.env.DEVICE_NAME)) {
    runTests(['iPhone X']);
  }
});
