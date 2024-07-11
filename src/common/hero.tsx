import {
  APP_DESCRIPTION,
  APP_REPOSITORY_URL,
  APP_TITLE,
} from '@/common/common-utils';
import { ExternalLinkIcon } from '@/common/icons';
import { routes } from '@/routing/routing-utils';
import { ButtonLink } from './button-link';
import { Divider } from './divider';

export function Hero() {
  return (
    <div className="border-b">
      <div className="flex flex-col items-center gap-4 px-4 py-12 text-center">
        
        <Divider />
        <ButtonLink variant="primary" href={routes.search()}>
          Browse Store
        </ButtonLink>
      </div>
    </div>
  );
}
