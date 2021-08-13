import { Handle } from "../../handles/Handle"

export class Field<T extends handle> extends Handle<T> {
    protected static proto_convert<T extends handle>(fieldFunc: (id: integer) => T, id: integer) {
        id = Math.floor(id)
        const field = new this(fieldFunc(id))
        field.id = id
        return field
    }
}
