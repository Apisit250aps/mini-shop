export abstract class BaseUseCase<Context, TOutput> {
  abstract execute(context: Context): Promise<TOutput>;
}

export abstract class BaseRepository<T> {
  abstract findAll(): Promise<T[]>;
  abstract findById(id: string): Promise<T | null>;
  abstract create(entity: T): Promise<void>;
  abstract update(id: T): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
