import { IsIn, IsOptional, ValidateIf, IsUrl } from 'class-validator';

export class FacebookDto {
  @IsOptional()
  @ValidateIf(p => p.url)
  @IsUrl()
  url?: string;

  @IsIn(['post', 'story', 'carousel', 'reel', 'video'])
  @IsOptional()
  post_type?: 'post' | 'story' | 'carousel' | 'reel' | 'video';
}
