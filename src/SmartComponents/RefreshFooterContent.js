import React from 'react';
import propTypes from 'prop-types';
import {
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core/dist/js/components/Text';
import { Tooltip } from '@patternfly/react-core/dist/js/components/Tooltip';

const RefreshFooterContent = ({ footerContent, isRunning, type }) => {
  return (
    <div>
      <Tooltip
        content={
          'Updates every minute automatically when there is a running task'
        }
      >
        <TextContent>
          <Text component={TextVariants.small}>
            {`Last updated${
              isRunning ? footerContent : `: All ${type} completed`
            }`}
          </Text>
        </TextContent>
      </Tooltip>
    </div>
  );
};

RefreshFooterContent.propTypes = {
  footerContent: propTypes.node,
  isRunning: propTypes.bool,
  type: propTypes.string,
};

export default RefreshFooterContent;
