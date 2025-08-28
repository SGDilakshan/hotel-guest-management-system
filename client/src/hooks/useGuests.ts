import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { pb, type Guest, type CreateGuestData, type UpdateGuestData } from "@/lib/pocketbase";

export function useGuests(search?: string) {
  return useQuery({
    queryKey: ["guests", search],
    queryFn: async () => {
      let filter = "";
      if (search) {
        filter = `first_name ~ "${search}" || last_name ~ "${search}" || email ~ "${search}"`;
      }

      const result = await pb.collection("guests").getList<Guest>(1, 50, {
        sort: "-created",
        filter,
      });
      return result.items;
    },
  });
}

export function useGuest(id: string) {
  return useQuery({
    queryKey: ["guest", id],
    queryFn: async () => pb.collection("guests").getOne<Guest>(id),
    enabled: !!id,
  });
}

export function useCreateGuest() {
    const queryClient = useQueryClient();

  return useMutation({
        mutationFn: async (data: CreateGuestData) => pb.collection("guests").create<Guest>(data),
    onSuccess: (guest: Guest) => {
      queryClient.invalidateQueries({ queryKey: ["guests"] });
      if (guest?.id) {
        queryClient.invalidateQueries({ queryKey: ["guest", guest.id] });
      }
    },
  });
}

export function useUpdateGuest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateGuestData }) =>
      pb.collection("guests").update<Guest>(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["guests"] });
      queryClient.invalidateQueries({ queryKey: ["guest", id] });
    },
  });
}

export function useDeleteGuest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => pb.collection("guests").delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["guests"] }),
  });
}
