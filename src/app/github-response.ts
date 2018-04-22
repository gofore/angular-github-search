import { GithubItem } from './github-item';

export interface GithubResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GithubItem[];
}
