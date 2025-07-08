import { Position, PositionItem } from '../interfaces/position.interfaces';

export class PositionMapper {
  static mapPositionResponse(item: PositionItem): Position {
    return {
      company: item.empresa?.razonSocial || '',
      product: item.producto?.nombre || '',
      dateAvailable: item.fechaEntregaInicio,
      price: item.precio,
      currency: item.moneda,
    };
  }

  static mapPositionItemsToPositionArray(items: PositionItem[]): Position[] {
    return items.map(this.mapPositionResponse);
  }
}
