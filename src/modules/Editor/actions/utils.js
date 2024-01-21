export const starPolygonPoints = (spikeCount, outerRadius, innerRadius, angle) => {
  const cx = outerRadius;
  const cy = outerRadius;
  const sweep = Math.PI / spikeCount;
  const points = [];

  for (let i = 0; i < spikeCount; i++) {
    let x = cx + Math.cos(angle) * outerRadius;
    let y = cy + Math.sin(angle) * outerRadius;
    points.push({x: x, y: y});
    angle += sweep;

    x = cx + Math.cos(angle) * innerRadius;
    y = cy + Math.sin(angle) * innerRadius;
    points.push({x: x, y: y});
    angle += sweep;
  }
  return points;
};

export const pentagramPoints = numPoints => {
  // Define the coordinates for the pentagram
  const centerX = 50 / 2;
  const centerY = 50 / 2;
  const radius = 65;
  const angleIncrement = (2 * Math.PI) / numPoints;
  const points = [];

  for (let i = 0; i < numPoints; i++) {
    const angle = i * angleIncrement - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({x: x, y: y});
  }
  return points;
};
