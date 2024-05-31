import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import CardSkeleton from "./CardSkeleton";
import { getProjects } from "../services/github-api";
import { Pagination } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function GitHubProjects() {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  //modal state
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading(true);
    try {
      const x = await getProjects();
      setProyectos(x);
    } catch (error) {
      onOpen(true);
    } finally {
      setLoading(false);
    }
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = proyectos.slice(startIndex, endIndex);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>Error fetching projects. Please try again later.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Ok
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {currentProjects.length > 0 || loading ? (
        <div>
          <h2 className="text-xl sm:text-3xl font-extrabold p-4">
            GitHub Projects
          </h2>
          <div>
            {loading ? (
              <div className="grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
                {Array.from({ length: itemsPerPage }).map((_, index) => (
                  <CardSkeleton key={index} />
                ))}
              </div>
            ) : (
              <div className="grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
                {currentProjects.map((p) => (
                  <ProjectCard key={p.id} object={p} />
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-center p-1">
            <Pagination
              total={Math.ceil(proyectos.length / itemsPerPage)}
              initialPage={1}
              onChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      ) : undefined}
    </>
  );
}
