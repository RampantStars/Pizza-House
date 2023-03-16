/* eslint-disable prettier/prettier */
import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as uuid from 'uuid';

export const imageFileFilter = (
  req: any,
  file: Express.Multer.File,
  callback: any,
) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(
      new HttpException(
        'Only image files are allowed!',
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }
  callback(null, true);
};
export const editFileName = (
  req: any,
  file: Express.Multer.File,
  callback: any,
) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = uuid.v4();
  callback(null, `${name}${randomName}${fileExtName}`);
};
