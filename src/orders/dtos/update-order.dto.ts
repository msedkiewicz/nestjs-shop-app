import { Transform } from 'class-transformer';
import { IsNotEmpty, Length, Min } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @Min(0)
  productId: string;

  @IsNotEmpty()
  @Length(5, 30)
  client: string;

  @IsNotEmpty()
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  address: string;
}
