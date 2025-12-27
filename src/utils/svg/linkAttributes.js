export default function setLinkAttributes(container, links) {
    const link = container.append('g')
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.1)
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke-width', 2)
        .attr('marker-end', 'url(#arrow)')
        .attr('class', l => 'link ' + l.target.id.toLowerCase())    // Class of an edge is its target.

    return link
}