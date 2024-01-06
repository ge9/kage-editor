import { Polygons } from '@ge9/kage-engine-2';

export interface StrokeComponentProps {
  polygons: Polygons;
  className?: string;
}

const StrokeComponent = (props: StrokeComponentProps) => (
  <>
    {props.polygons.array.map((polygon, i) => (
      <path
        key={i}
        className={props.className}
        d={polygon.get_sub_path_svg()}
      />
    ))}
  </>
);

export default StrokeComponent;
