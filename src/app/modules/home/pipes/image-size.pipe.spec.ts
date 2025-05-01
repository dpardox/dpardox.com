import { ImageSizePipe } from './image-size.pipe';

xdescribe('ImageSizePipe', () => {
  it('create an instance', () => {
    const pipe = new ImageSizePipe();
    expect(pipe).toBeTruthy();
  });
});
