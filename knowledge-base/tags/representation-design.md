# Tag: representation-design

- `INS-260603-4387` Satish: people create lat/long grids and throw them at a model expecting it to learn — but 1° of latitude is ~111km at the equator and near-0 at the poles, so the representation itself is distorted; his team instead represents Earth as a dense triangular geodesic grid so information density per cell is consistent.
